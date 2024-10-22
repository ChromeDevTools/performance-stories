function spin(multiplier) {
  // Just wait a while, avoiding annoying flame chart from perf.now() calls.
  for (let i = 0; i < 2_000_000 * multiplier; i++) {}
}

/*
 * ┌┐      ┌───────────┌──────┐
 * S1─────►R1          R2     │
 * └┘      └──┌┐───┌┐──└▲────┌┐
 *            S2┐  S3-──┼───►C3
 *            └┘│  └┘   │    └┘
 *              └───────┘
 * S - Schedule
 * R - Run
 * C - Cancel
 */
async function taskWithSubTasks() {
  spin(100);

  const backgroundController = new TaskController();
  const backgroundSubtask = scheduler.postTask(() => {
    spin(500);
  }, {priority: 'background', signal: backgroundController.signal});

  spin(50);

  // Cancel background task in higher-priority task.
  const userBlockingSubTask = scheduler.postTask(() => {
    spin(100);
    backgroundController.abort('cancel background work')
  }, {priority: 'user-blocking'});

  spin(100);
  return Promise.allSettled([backgroundSubtask, userBlockingSubTask]);
}

/*
 * ┌┐     ┌────────────┐
 * S┼────►R            │
 * └┘     └───────────┌┐
 * └─────────────────►C│
 *                    └┘
*/
const selfCancellingController = new TaskController();
async function selfCancellingTask() {
  spin(100);
  // RunPostTaskCallback starts but calls its own cancellation.
  selfCancellingController.abort('just get rid of me');
}

await scheduler.postTask(taskWithSubTasks, {delay: 200});
await scheduler.postTask(selfCancellingTask, {delay: 100, signal: selfCancellingController.signal});
