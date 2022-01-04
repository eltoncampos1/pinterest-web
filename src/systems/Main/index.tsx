import { useCallback, useState } from "react";
import { DynamicHeading } from "./Components";
import * as S from "./styles";

type SetupAnimation = {
  timePerScreen: number;
  exitDelay: number;
};

const headings = [
  {
    text: "activity for kids",
    isActive: false,
    animateBefore: false,
    animateAfter: false,
  },
  {
    text: "idea for special dinner",
    isActive: false,
    animateBefore: false,
    animateAfter: false,
  },
  {
    text: "DIY project",
    isActive: false,
    animateBefore: false,
    animateAfter: false,
  },
  {
    text: "summer outfit idea",
    isActive: false,
    animateBefore: false,
    animateAfter: false,
  },
];

const columns = [
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    column: [
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },

      {
        url: "https://images.unsplash.com/photo-1641289024282-5a50e8fd6c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
];

export const Main = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [titles, setTitles] = useState(headings);
  const [title, setTitle] = useState({
    text: "",
    isActive: false,
    animateBefore: false,
    animateAfter: false,
  });

  function enterScreen(index: number) {
    const heading = titles[index];
    heading.animateAfter = false;
    heading.animateBefore = false;
    setTitle(heading);
  }

  function exitScreen(index: number, exitDelay: number) {
    const heading = titles[index];
    heading.animateAfter = true;

    setTimeout(() => {
      // console.log("ok");
    }, exitDelay);
  }

  const render = () => {
    setTitle(headings[currentIdx]);
    setTimeout(() => {
      if (currentIdx >= headings.length - 1) {
        setCurrentIdx(0);
      }
      setCurrentIdx(currentIdx + 1);
    }, 2000);
    console.log(title);
    return <DynamicHeading>{title && title.text}</DynamicHeading>;
  };

  function setupAnimationCycle({ timePerScreen, exitDelay }: SetupAnimation) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;
    function nextCycle() {
      const currentIndex = nextIndex;
      enterScreen(currentIndex);

      setTimeout(() => {
        exitScreen(currentIndex, exitDelay);
      }, timePerScreen);
      nextIndex = nextIndex >= headings.length - 1 ? 0 : nextIndex + 1;
    }

    nextCycle();

    setInterval(() => nextCycle(), cycleTime);
  }

  // setupAnimationCycle({
  //   timePerScreen: 2000, // ms
  //   exitDelay: 200 * 7, // ms
  // });

  return (
    <S.Main>
      <S.HeadingContainer>
        <S.StaticHeading>Get your next</S.StaticHeading>
        {render()}
        {/* {titles.map((h1) => (
          <DynamicHeading
            key={h1.text}
            animateAfter={h1.animateAfter}
            animateBefore={h1.animateBefore}
          >
            {h1.text}
          </DynamicHeading>
        ))} */}

        <ul>
          {/* {headings.map((heading, idx) => (
            <S.Label isActive>&nbsp;</S.Label>
          ))} */}
        </ul>
      </S.HeadingContainer>

      <S.GridContainer>
        <S.Grid>
          {columns.map((col) => (
            <S.Column>
              {col.column.map((cl) => (
                <S.Item src={cl.url} />
              ))}
            </S.Column>
          ))}
        </S.Grid>
      </S.GridContainer>
    </S.Main>
  );
};
