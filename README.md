# hoursCalc

hoursCalc is a quick way of estimating your availability each quarter based on holidays and any vacation days you take.

The formula powering the algorithm works as follows:

```
/* fixed variables */
const weeks = 12; // weeks in an average quarter
const hours = 40; // average weekly work hours
const workDay = 8; // average hours in a workday
const nonDeepWork = 0.20; // 20% of time in meetings and on "non-deep" work

/* flexible variables */
let holidays = 0; // paid holidays this quarter
let vacationDays = 0; // vacation days this quarter

/* formula */
const availability = () => ((weeks * hours) - ((weeks * hours) * nonDeepWork)) - ((vacationDays + holidays) * workDay);

/* calculate total */
availability(); // n available hours this quarter
```

Try it out on [JSBin](https://jsbin.com/zamama/edit?js,console).
