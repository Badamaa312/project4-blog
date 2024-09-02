import { Carousel } from "../carousel/Carousel";
import { HomePage } from "../homepage/HomePage";

export default function MainPage() {
  return (
    <main>
      <div className="">
        <HomePage />
        <Carousel />
      </div>
    </main>
  );
}
