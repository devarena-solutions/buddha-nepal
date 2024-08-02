export default function ThursdayLunch({ lunch }: { lunch: string }) {
  if (lunch !== "Thursday") return;
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl lg:text-[50px] font-semibold text-primary">
        TORSDAG
      </h1>
      <div className="w-full mt-10 grid gap-10">
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              1. CHICKEN TIKKA MASALA
            </h3>
            <p className="text-xl">
              (Grillad kycklingfile med masala sås, MILD)
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">125kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              2. LAMM KARAI
            </h3>
            <p className="text-xl">
              (lammfile med paprika och lök i basilika sås, Mellan)
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              3. SNOWY SPICE HAVEN CHICKEN
            </h3>
            <p className="text-xl">
              (Kycklingfile med grön chilli och kokos sås)
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">125kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              4. Dall Pumpa
            </h3>
            <p className="text-xl">
              (Exotiska blandade linser med pumpa, Mellan)
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">120kr</p>
        </div>
      </div>
      <h1 className="text-3xl lg:text-[40px] font-semibold mt-10 text-primary">
        DAGENS SPECIALL{" "}
      </h1>
      <div className="w-full mt-10 grid gap-10">
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              5. TANDOORI WOK (Mellan)
            </h3>
            <p className="text-xl">
              Marinerade kycklingfileer, färska grönsaker, koriander med chilli
              sås
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              6. SHAHI MUGLAI (Mellan)
            </h3>
            <p className="text-xl">
              Grillad kycklingfile tillagat med parika, lök, färskkoriander och
              separat tandoori sås
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              7. MIX TIKKA SIZZLAR (Mild sås)
            </h3>
            <p className="text-xl">
            Tre olika Kryddmarinerade, chilli, vitlök, och tandoori kycklingfiléer i en mild tandoori krydda sås
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              8. TRE SMÅ RÄTTER 
            </h3>
            <p className="text-xl">(Valfri tre olika små rätter från dagens lunch menyn, nr.1-4)</p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="text-start w-[80%] lg:w-auto">
            <h3 className="text-xl lg:text-3xl font-semibold text-primary">
              9. AYURVEDA LAMM / KYCKLING
            </h3>
            <p className="text-xl">
              Indisk hälsöfilsofi rätter , med curryblad,lök, senapfrö,kokos,
              rödchilli och tamarin.{" "}
            </p>
          </div>
          <hr className="flex-1 border mx-4 hidden lg:inline border-black mt-5" />
          <p className="text-xl lg:text-3xl font-semibold">135kr</p>
        </div>
      </div>
    </div>
  );
}
