import React, { useReducer } from 'react'
import '../App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';
import { reducer } from '../Reducer'
import { initialState } from '../InitialState';
export default function NewCharacter({name}) {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { Barbarian, Wizard, Bard } = CLASS_LIST
    let barbarianAchieved, wizardAchieved, bardAchieved = null

     function editModifier(attribute) {
        const dispatchStr = 'altered_' + attribute.toLowerCase() + 'Modifier'
        dispatch({type: dispatchStr})
     }

    function increaseOrDecreaseAttribute(attribute, increaseOrDecrease) {
        let dispatchStr = null
        if(increaseOrDecrease > 0) {
            dispatchStr = 'increased_' + attribute
        } else {
            dispatchStr = 'decreased_' + attribute
        }
        dispatch({type: dispatchStr})
        editModifier(attribute)
    }

    function closeRequirements() {
        dispatch({type: 'close_requirements'})
    }

    function checkClassRequirements(classType) {
        dispatch({type: 'switch_visibility'})
        dispatch({type: 'change_class_type_to_' + classType.toLowerCase()})
        dispatch({type: 'change_requirements_to_' + classType.toLowerCase()})
    }

    function isClassMet(classObject) {
        let doesNotMeetRequirements = ATTRIBUTE_LIST.filter((attribute) => {
            const required = classObject[attribute]
            const actual = state[attribute]
            return actual < required
        })
        return (doesNotMeetRequirements.length === 0)
    }

    barbarianAchieved = isClassMet(Barbarian)
    wizardAchieved = isClassMet(Wizard)
    bardAchieved = isClassMet(Bard)

        return (
            <div className={`${state.visible? "new-character requirements-column" : "new-character"}`}> 
            <h1>Character: {name} </h1>
            <section>
                <div className="section-container">
                <h2>Attributes</h2>
                    {ATTRIBUTE_LIST.map((attribute, index) =>
                    <h4 key={index}>{attribute}: {state[attribute]}(Modifier: {state[attribute.toLowerCase() + 'Modifier']})<button onClick={() => increaseOrDecreaseAttribute(attribute, 1)}>+</button>
                    <button onClick={() => increaseOrDecreaseAttribute(attribute, -1)}>-</button></h4>)}
                    </div>
                    <div className="section-container">
                <h2>Classes</h2>
                    <h4 onClick={() => checkClassRequirements("Barbarian")} className={`${barbarianAchieved ? "activated" : ""}`}>Barbarian</h4>
                    <h4 onClick={() => checkClassRequirements("Wizard")} className={`${wizardAchieved ? "activated" : ""}`}>Wizard</h4>
                    <h4 onClick={() => checkClassRequirements("Bard")}  className={`${bardAchieved ? "activated" : ""}`}>Bard</h4>
                    </div>
                {state.visible && (<div>
                    <h2>{state.classType} Minimum Requirements</h2>
                        {(state.classRequirements).map((classRequirement, index) =>
                        <ul key={index}>{classRequirement[0]}: {classRequirement[1]}</ul>)}
                    <button onClick={() => closeRequirements()}>Close Requirement View</button>
                </div>)}
                <div className="section-container">
                    <h2>Skills</h2>
                    <h3>Total skill points available: {10 + (state.intelligenceModifier*4)}</h3>
                    {SKILL_LIST.map((skill, index) =>
                     <ul key={index}>{skill.name}: {}<button>+</button>
                     <button>-</button>total: {}</ul>   
                    )}
                </div>
            </section>
            </div>
        )
    }
