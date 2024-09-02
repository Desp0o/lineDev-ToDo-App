import React from 'react'
import LoginPageCardComp from './LoginPageCardComp'

const Pattern = () => {

    const cardsArray = [
        {   
            "tags":["#Website", "#Clients"],
            "gradient1": "#7EBDF7",
            "gradient2": "#654A91",
            "textColor": "#ffffff",
            "title": "Make Mobile App Design",
            "activeBulletsNum": 12,
            "attentionText": "They Like Our Old Project",
            "toDo": ["Create User Flow", "Make Design Sistem", "Deside Color", "Make main Logo"]
        }
    ]

    return (
        <div>
            {
                cardsArray.map((item, index) => {
                    return (
                        <LoginPageCardComp
                            key={index}
                            tags={item.tags}
                            gradient1={item.gradient1}
                            gradient2={item.gradient2}
                            textColor={item.textColor}
                            title={item.title}
                            activeBulletsNum={item.activeBulletsNum}
                            attentionText={item.attentionText}
                            toDo={item.toDo}
                        />
                    )
                })
            }

        </div>
    )
}

export default Pattern