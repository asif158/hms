import React, { useState } from "react";
import AddComplaint from "./AddComplaint";
import ComplaintBox from "./ComplaintBox";
import Info from "./Info";

const Student = () => {
	const [open, setOpen] = useState(false);
	
	return <div style={{width:"100%"}}>
	
		<AddComplaint setOpen={setOpen}/>
		<ComplaintBox open={open} setOpen={setOpen}/>
		<Info/>
	</div>;

};

export default Student;
