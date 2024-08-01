import {Card, CardContent} from "@/components/ui/card.tsx";
import React, {Children, type ReactElement} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import type {Props} from "astro";

export function GamesCarousel({ golden, summoned }): ReactElement {
  return (
    <Carousel className="w-full mt-5">
      <CarouselContent>
        <CarouselItem>
          <Card className="h-[500px]">
            <CardContent className="p-10 h-full">
              {golden}
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="h-[500px]">
            <CardContent className="p-10 h-full">
              {summoned}
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}