import React from 'react'
import LoginPageCardComp from './LoginPageCardComp'

const Pattern = () => {

    const cardsArray = [
        {
            "gradient1":"",
            "gradient2":"",
            "textColor":"",
            "activeBulletsNum": 17,
            "attentionText":"",
            "toDo":[]
        }
    ]

    return (
        <div>
            {
                cardsArray.map((item, index)=>{
                    return(
<LoginPageCardComp 
                gradient1={item.gradient1} 
                gradient2={item.gradient2} 
                textColor={item.textColor} 
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