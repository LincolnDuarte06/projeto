import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <center>
        <h2>PAGINA INICIAL</h2>
        <button className="btn">
          <Link href={"/login/"}>
                    <p>Fazer Login</p>
          </Link>
        </button>
      </center>
    </div>
  );
}
