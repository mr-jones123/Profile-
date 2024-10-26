import Image from "next/image";

import Link from "next/link";
export default function DigitalCard(){
    return(

        <div className="flex h-full w-full">
            <Image
              src="/brand_logo_bgremove.png"
              alt="Brand Logo"
              width={150}
              height={200}
              className="w-auto"
             >
            </Image>
            <div className ="flex flex-col items-start p-6 gap-4 text-white  w-full">
                <h2 className="font-bold text-lg">small efforts. big results.</h2>
                <div className="flex space-x-3">
                    <Link href="https://www.linkedin.com/in/xynil-jhed-lacap-76ba9029a/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>  
                    </Link>
                    <h3 className="font-extrabold">LinkedIn</h3>
                </div>

                <div className="flex space-x-3">
                    <Link href="https://www.linkedin.com/in/xynil-jhed-lacap-76ba9029a/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                    <h3 className="font-extrabold">GitHub</h3>
                </div>

                <div className="flex space-x-3">
                    <Link href="mailto:xylacap@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </Link>
                    <h3 className="font-extrabold">xylacap@gmail.com</h3>
                </div>
            </div>
        </div>
    );
}