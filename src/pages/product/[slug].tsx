//==========contoh penggunaan dynamic routing==========

//cara mengambil id slug nya menggunakan firut router
//id (yaitu idnya adalah slug) tersebut dapat digunakan untuk memfeching data ke api
import { useRouter } from "next/router";

const DetailProductPage = () => {
    const {query}= useRouter();
    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.slug}</p>
        </div>
    );
};

export default DetailProductPage;