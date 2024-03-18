'use client';
import { Card, Slider, Spacer } from '@nextui-org/react';
import React from "react";
import SlideShow from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const budgets = [
  {
    name: 'Groceries',
    goal: 100,
    spent: 40,
    color: "success",
  },
  {
    name: 'Squirrel Rental',
    goal: 600,
    spent: 540,
    color: "warning",
  },
  {
    name: 'Monthly Bills',
    goal: 300,
    spent: 330,
    color: "danger",
  },
  {
    name: 'Snail Racing',
    goal: 1500,
    spent: 2000,
    color: "danger",
  },
  {
    name: 'Cow Tattoos',
    goal: 5,
    spent: 3,
    color: "warning",
  },
]

function carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
  }
  return (
    <Card className="bg-background/60 dark:bg-default-100/50 bg-gray-100 h-28">  
      <div className="m-auto">
        <SlideShow {...settings} className='max-w-3xl'>
          {budgets.map((b) => (
            <div key={b.name} className='px-8'>
              <div className="bg-gradient-to-tr from-blue-500 to-purple-500 h-[80px] rounded-xl p-2 !w-32">
                <h3 className="text-white text-center">{b.name}</h3>
                <p className="text-xs text-white text-right">{'$'+b.spent+' / $'+b.goal}</p>
                <Slider
                  size="md"
                  hideThumb={true}
                  // @ts-ignore: b.color turns into a valid property
                  color={b.color}
                  step={0.01} 
                  value={b.spent/b.goal}
                  maxValue={1}
                  minValue={0}>
                </Slider>
              </div>
            </div>
          ))}
        </SlideShow>
      </div>
    </Card>
  );
}

export default carousel;