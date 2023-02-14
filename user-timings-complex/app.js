function doWork() {
  for (var i = 0; i < 10000; i++) {}
}

function nestedPerformanceMeasure() {
  performance.mark("nested-a-start");
  {
    performance.mark("nested-b-start");
    doWork();
    performance.mark("nested-b-end");
    {
      performance.mark("nested-c-start");
      {
        performance.mark("nested-d-start");
        doWork();
        performance.mark("nested-d-end");
      }
      performance.mark("nested-c-end");
    }
  }
  performance.mark("nested-a-end");
  performance.measure("nested-a", "nested-a-start", "nested-a-end");
  performance.measure("nested-b", "nested-b-start", "nested-b-end");
  performance.measure("nested-c", "nested-c-start", "nested-c-end");
  performance.measure("nested-d", "nested-d-start", "nested-d-end");
}

function parentMeasureIsOnTop() {
  performance.mark("startTime1");
  doWork();
  performance.mark("endTime1");

  performance.mark("startTime2");
  doWork();
  performance.mark("endTime2");

  performance.measure("durationTimeTotal", "startTime1", "endTime2");
  performance.measure("durationTime1", "startTime1", "endTime1");
  performance.measure("durationTime2", "startTime2", "endTime2");
}

nestedPerformanceMeasure()
parentMeasureIsOnTop()
