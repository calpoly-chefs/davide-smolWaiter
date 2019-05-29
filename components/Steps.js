import React from "react";
import Step from "../components/Step.js";

export default class Steps extends React.Component {    
    render() {
        const recipe = this.props.recipe;
        const steps = this.props.steps;

        var StepIDs = recipe.steps;
        return StepIDs.map(id => {
            const step = steps.byId[id];

            return (
                <Step
                    id={step.stepNum}
                    text={step.step}
                    annotations={step.annotations}
                    edit={false}
                />
            );
        });
    }
}