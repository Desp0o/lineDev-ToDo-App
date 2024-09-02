import React from 'react'
import { listCyrcle } from '../../assets/icons/listCircle'

const LoginPageCardComp = ({gradient1, gradient2 ,textColor, activeBulletsNum, attentionText, toDo }) => {

    const bullets = Array.from({ length: 20 })
    const activeBullets = Array.from({ length: activeBulletsNum })

    return (
        <div className='w-[162px] rounded-[12px] overflow-hidden	py-[12px] pl-[12px]
        flex flex-col gap-[9px]' style={{ color: textColor, background: `linear-gradient(to top right, ${gradient1}, ${gradient2}`, }}>
            {/* tags */}
            <div className='flex gap-[5px]'>
                {/* single tag */}
                <div className='bg-[#FFFFFF] px-[3.21px] py-[6.42px] rounded-[12px]'>
                    <p className='text-[11px] text-[#F77E7E]'>#Website</p>
                </div>
            </div>

            {/* title */}
            <h2 className='text-[11px] leading-[14px]'>Searching Inspirations For Upcoming Projects</h2>

            {/* progress */}
            <div className='flex flex-col'>
                <p className='text-[8.42px] leading-[10.19px]'>Progress</p>

                {/* bullets */}
                <div className='flex mt-[8px] relative'>
                    {/* passive bullets */}
                    <div className='flex absolute'>
                        {
                            bullets.map((_, index) => {
                                return (
                                    <div key={index} className='w-[8px] h-[8px] rounded-full bg-[#D9D9D9]'></div>
                                )
                            })
                        }
                    </div>

                    {/* active bullets */}
                    <div className='flex absolute'>
                        {
                            activeBullets.map((_, index) => {
                                return (
                                    <div key={index} className='w-[8px] h-[8px] rounded-full bg-[#FFFFFF]'></div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

            {/* attention */}
            {!attentionText &&
                <p className='mt-[9px] text-[8px] leading-[10px]'>{`Attention: ${attentionText}`}</p>}

            {/* To Do list */}
            {
                !toDo &&
                <div className=''>
                    <p className='text-[11px] leading-[14px]'>To Do</p>

                    <ul className='list-disc list-outside'>
                        {
                            bullets?.map((item, index)=>{
                                return(
                                    <li key={index} className='flex gap-[3px] items-center'>
                                        {listCyrcle}
                                        <p className='text-[8px] leading-[10px]'>asdasd</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default LoginPageCardComp