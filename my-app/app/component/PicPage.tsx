import Image from "next/image";
import { Container } from "./Container";
import Card from "./Data";

export const PicPage = () => {
  return (
    <div className="w-full mx-auto py-16 px-4">
      <div className=" justify-center flex flex-col items-center w-aut0">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A delectus
          eaque repudiandae! Veritatis quis dolorem quidem architecto totam
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          totam?
        </p>
      </div>

      <Container>
        <div className="grid gap-2 lg:grid-cols-4 border-[2px] min-h-[500px]">
          {Card.map((data) => {
            return (
              <div className="shadow-md border-[2px]">
                <div className="relative ">
                  <img src={data.img} alt="img" />
                  <div className="absolute top-0 text-white m-2 ">
                    <div className="flex justify-between h-11 w-full">
                      <div className=" mr-60">
                        <button className="py-2 px-1 border">Order</button>
                      </div>
                      <div>🛒</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between m-5">
                  <div>{data.title}</div>
                  <div>{data.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
