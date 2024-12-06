import Basket from "@/shared/assets/icons/basket";

const Home = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="text-[40px] text-[#FF7640] font-bold">Nacho</div>
                <div>
                    <div>

                    </div>
                </div>
                <div className="flex items-center justify-between pl-[900px]">
                    <Basket/>
                    <div className="text-[16px] font-bold">Корзина</div>
                </div>
                <div className="flex items-center justify-between gap-[25px]">
                    <div className="text-[16px] font-bold">Войти</div>
                    <div>|</div>
                    <div className="text-[16px] text-[#BF5930] font-semibold" >Регистрация</div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;