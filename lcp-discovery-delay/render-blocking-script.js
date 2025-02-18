function sleepFor(sleepDuration) {
  let now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {}
}
sleepFor(1_000);
