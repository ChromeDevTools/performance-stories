# deep-js-stacks

This test case exists to show what happens to JS callstacks at around 256 frames tall.

The known bug: the v8 sampling profiler only emits the _top-most_\* 256 callframes on the stack.

\* Visually in the flamechart it's the bottom-most.

<img width="1209" alt="top of flamechart" src="https://github.com/user-attachments/assets/0da728f5-4dc3-4412-97c0-4f197a40f37b" />
<img width="1124" alt="bottom of flamechart" src="https://github.com/user-attachments/assets/e62dbf02-dccc-418a-9fbe-488213eb2fb5" />
