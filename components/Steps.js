import React from "react";
import Step from "../components/Step.js";

export default class Steps extends React.Component {    
    render() {
        const steps = this.props.steps;
        const edit = this.props.edit;

        return steps.map((step, index) => {
            return (
                <Step
                    stepNum={index}
                    text={step.step}
                    annotations={step.annotations}
                    edit={edit}
                />
            );
        });
    }
}