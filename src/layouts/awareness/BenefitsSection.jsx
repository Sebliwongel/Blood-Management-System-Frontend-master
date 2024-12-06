import React from "react";

function BenefitsSection() {
  return (
    <div className="flex flex-col items-center gap-8" id="blood">
      <h1 className="text-3xl font-bold text-red-700">Use of Blood Donation</h1>
      <div className="grid grid-cols-3 gap-6 px-8">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-center font-bold text-2xl">
            Improve cardiovascular health
          </h1>
          <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
            Donating blood can help lower your risk of heart attack and
            stroke. Studies show that donors can experience an 88% lower risk
            of acute myocardial infarction compared to non-donors.
          </h5>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Reduce risk of cancer</h1>
          <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
            Some studies have shown that regular donors have a lower risk of
            certain types of cancer, such as liver and colon cancer.
          </h5>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Free health screening</h1>
          <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
            When you donate blood, you will receive a free health screening,
            which includes checking your blood pressure, temperature, pulse,
            and iron levels.
          </h5>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Peace of mind</h1>
          <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
            Knowing that you have helped save lives can give you a sense of
            satisfaction and peace of mind.
          </h5>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Improves skin aging</h1>
          <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
            Donating blood can reduce iron deposits and promote collagen
            re-synthesis, which can improve skin aging.
          </h5>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Research and development</h1>
          <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
            Blood donations contribute to medical research that leads to
            advancements in treatments, diagnostics methods, and the
            understanding of various diseases.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
