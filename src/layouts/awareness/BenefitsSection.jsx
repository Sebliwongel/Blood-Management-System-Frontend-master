import React from "react";

function BenefitsSection() {
  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4 sm:px-8" id="blood">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-red-700 text-center">
        Use of Blood Donation
      </h1>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Benefit 1: Improve Cardiovascular Health */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">
            Improve Cardiovascular Health
          </h1>
          <p className="text-slate-500 text-sm text-justify">
            Donating blood can help lower your risk of heart attack and stroke. Studies show that donors can experience an 88% lower risk of acute myocardial infarction compared to non-donors.
          </p>
        </div>

        {/* Benefit 2: Reduce Risk of Cancer */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">Reduce Risk of Cancer</h1>
          <p className="text-slate-500 text-sm text-justify">
            Some studies have shown that regular donors have a lower risk of certain types of cancer, such as liver and colon cancer.
          </p>
        </div>

        {/* Benefit 3: Free Health Screening */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">Free Health Screening</h1>
          <p className="text-slate-500 text-sm text-justify">
            When you donate blood, you will receive a free health screening, which includes checking your blood pressure, temperature, pulse, and iron levels.
          </p>
        </div>

        {/* Benefit 4: Peace of Mind */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">Peace of Mind</h1>
          <p className="text-slate-500 text-sm text-justify">
            Knowing that you have helped save lives can give you a sense of satisfaction and peace of mind.
          </p>
        </div>

        {/* Benefit 5: Improves Skin Aging */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">Improves Skin Aging</h1>
          <p className="text-slate-500 text-sm text-justify">
            Donating blood can reduce iron deposits and promote collagen re-synthesis, which can improve skin aging.
          </p>
        </div>

        {/* Benefit 6: Research and Development */}
        <div className="text-center flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl sm:text-2xl">Research and Development</h1>
          <p className="text-slate-500 text-sm text-justify">
            Blood donations contribute to medical research that leads to advancements in treatments, diagnostics methods, and the understanding of various diseases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;