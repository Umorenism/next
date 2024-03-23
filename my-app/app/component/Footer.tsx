import { Container } from "./Container";
import { Dispay } from "./Dispay";
import { FooterList } from "./FooterList";

export const Footer = () => {
  return (
    <div className="bg-white text-slate-700 text-sm mt-16">
      <Dispay />

      <div className="flex flex-col mb-6 ml-6">
        <h1 className="text-2xl ">Instagram</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
          quam.
        </p>
      </div>

      <div className="grid sm:grid-cols-1">
        <div className="grid grid-cols-4  h-[80px]">
          <div className="flex justify-center items-center text-center border-[2px] h-full border-y-slate-600">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex justify-center items-center text-center border-[2px] h-full border-y-slate-600">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex justify-center items-center text-center border-[2px] h-full border-y-slate-600">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex justify-center items-center text-center border-[2px] h-full border-y-slate-600">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="h-1 w-full mb-6 bg-slate-500"></div>
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-6">
          <FooterList>
            <h1 className="text-3xl">CORSEN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
              at.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
              at.
            </p>
          </FooterList>
          <FooterList>
            <h1 className="text-xl">SPEN</h1>
            <p>Lorem ipsum dolor sit amet consectetur, Quas,</p>
            <p>Lorem ipsum dolor sit amet conse</p>
            <p>Lorem ipsum</p>
          </FooterList>

          <FooterList>
            <h1 className="text-xl">CORSEN</h1>
            <p className="py-3 w-20 px-2 bg-black"></p>
            <p className="py-3 w-10 px-2 bg-black"></p>
            <p className="py-3  w-32 px-2 bg-black"></p>
            <p className="py-3 w-5 px-2 bg-black"></p>
          </FooterList>
          <FooterList>
            <h1 className="text-xl">SEN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            </p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </FooterList>
          <FooterList>
            <h1 className="text-xl font-bold">Get the level fashion</h1>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="h-1 w-50 bg-slate-500"></div>
          </FooterList>
        </div>
      </Container>
      <div className="h-1 w-full mb-6 bg-slate-500">
        <Container>
          <FooterList>
            <div className="flex">
              <p>lorem</p>
              <p className="py-2  w-40 px-2 bg-black"></p>
              <p>loremiirytet</p>
            </div>
          </FooterList>
        </Container>
      </div>
    </div>
  );
};
