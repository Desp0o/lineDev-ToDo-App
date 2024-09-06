import React, { useEffect, useState, useRef } from "react";
import { calendarIcon } from "../assets/icons/calendar";
import { cardDots } from "../assets/icons/cardDots";
import ToDoCardSettings from "./ToDoCardSettings";
import { useDispatch, useSelector } from "react-redux";
import { setAactiveIndex } from "../redux/settingSlicer";
import { MdLabelImportant } from "react-icons/md";

const ToDoCard = ({
  date,
  text,
  bg,
  index,
  taskId,
  complete,
  important,
  refetch,
}) => {
  const activeIndex = useSelector((state) => state.settingPanelStore.value);
  const dispatch = useDispatch();
  const settingRef = useRef();
  const dotRefs = useRef();
  const [positions, setPositions] = useState({
    posX: null,
    posY: null
  })

  useEffect(() => {
    const handler = (e) => {
      if (settingRef.current && dotRefs.current) {
        if (
          !settingRef.current.contains(e.target) &&
          !dotRefs.current.contains(e.target)
        ) {
          dispatch(setAactiveIndex(null));
        }
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  const handleSettings = (e) => {
    if (index === activeIndex) {
      dispatch(setAactiveIndex(null));
    } else {
      dispatch(setAactiveIndex(index));
    }
    console.log(e.pageY);
    console.log(e.pageX);
    setPositions({...positions, posX: e.pageX, posY: e.pageY})
  };

  const getPosition = (e) => {
    console.log(e.pageY);
    console.log(e.pageX);
  }

  return (
    <div className="group/card">
      <div
        className="relative w-[343px] lg:w-[252px] px-[16px] py-[12px] rounded-[10px] flex flex-col gap-[22px]
                   hover:drop-shadow-[1px_1px_6px_rgba(0,0,0,0.25)] transition-all"
        style={{
          backgroundColor:
            bg === 1
              ? "#FBF0E4"
              : bg === 2
              ? "#FCE4F5"
              : bg === 3
              ? "#E7E4FC"
              : bg === 4
              ? "#FCE4E4"
              : "#E4F6FC",
        }}
      >
        {important && (
          <span className="absolute right-[10px] rotate-90">
            <MdLabelImportant />
          </span>
        )}

        {/* top section */}
        <div className="flex flex-col gap-[16px]">
          <div
            className="flex gap-[10px] items-center px-[14px] py-[4px] bg-black w-fit rounded-[30px]"
            style={{
              backgroundColor:
                bg === 1
                  ? "#FDF8F2"
                  : bg === 2
                  ? "#FDF2FA"
                  : bg === 3
                  ? "#F3F1FD"
                  : bg === 4
                  ? "#FDF1F1"
                  : "#F1FAFD",
            }}
          >
            {calendarIcon}
            <p className="text-[14px] leading-[20px]">{date}</p>
          </div>
          <p
            className="text-[14px] leading-[20px]"
            style={{ textDecoration: complete ? "line-through" : "none" }}
          >
            {text}
          </p>
        </div>

        <span
          ref={dotRefs}
          onClick={handleSettings}
          className="visible lg:invisible group-hover/card:lg:visible w-[24px] h-[24px] place-self-end cursor-pointer flex items-center justify-center"
        >
          {cardDots}
        </span>
      </div>

      {activeIndex === index && (
        <div
        className="absolute z-10 group/card"
        ref={settingRef}
        style={{ top: positions.posY - 180, left: positions.posX - (window.innerWidth > 1023 ? 515 : 210)}}
      >
          <ToDoCardSettings
          posX={positions.posX}
          posY={positions.posY}
            text={text}
            refetch={refetch}
            taskId={taskId}
            complete={complete}
            important={important}
          />
        </div>
      )}
    </div>
  );
};

export default ToDoCard;
