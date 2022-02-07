import React from "react";
function CounterUnfulfilled() {

  return (

<div className="dashboard-counter-ctn">
<div className="dashboard-counter-block">
<div><strong>Request unfulfilled</strong></div>
<div className="progress-circle progress-circle-unf" data-value="38">
</div>
</div>

<div className="dashboard-counter-block">
<div><strong>Material needs</strong></div>
<div className="progress-circle progress-circle-mat" data-value="38">
</div>
</div>

<div className="dashboard-counter-block">
<div><strong>One-time task</strong></div>
<div className="progress-circle progress-circle-task" data-value="38">
</div>
</div>

<div className="dashboard-counter-block">
<div><strong>Messages</strong></div>
<div className="progress-circle progress-circle-msg" data-value="38">
</div>
</div>

</div>
)
}
export default CounterUnfulfilled;
