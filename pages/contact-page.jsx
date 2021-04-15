import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="お問い合わせ">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image 
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Addres</p>
          <div className="text-xs mt-2 text-gray-600">city A</div>
          <div className="font-bold mt-3">E mail</div>
          <div className="text-xs mt-2 text-gray-600"></div>
          <div className="font-bold mt-3">Phone</div>
          <div className="text-xs mt-2 text-gray-600">080-1111-2222</div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact