import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
export default function DigitalCard(){
    return(

        <div className="flex">
            <Image
              src="/brand_logo_bgremove.png"
              alt="Brand Logo"
              width={200}
              height={200}
              className="w-auto"
             >
            </Image>
            <div className="flex flex-col items-start gap text-white w-full">
        
            </div>
        </div>
    );
}