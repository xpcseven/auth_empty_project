"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// ضبط بيانات الصفحة
export const metadata = {
  title: "شركة الضلال السياحية",
  description: "سياحة",
};

export default function Home({ user }: any) {
  const parseCurrentUser = JSON.parse(user);
  const [currentFact, setCurrentFact] = useState(0);

  let roleRedirect = "";
  if (
    parseCurrentUser?.role === "SUPERADMIN" ||
    parseCurrentUser?.role === "SUPERVISOR"
  ) {
    roleRedirect = "../superadmin_dashboard";
  } else if (
    parseCurrentUser?.role === "ADMIN" ||
    parseCurrentUser?.role === "STAFF"
  ) {
    roleRedirect = "../admin_dashboard";
  } 
  // وقائع دينية متنوعة
  const religiousFacts = [
    {
      text: "قال الله تعالى: {وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ}",
      reference: "الأنبياء: 107",
    },
    {
      text: "قال رسول الله صلى الله عليه وسلم: {خير الناس أنفعهم للناس}",
      reference: "رواه الطبراني",
    },
    {
      text: "قال الإمام علي عليه السلام: {الناس ثلاثة: عالم رباني، ومتعلم على سبيل نجاة، وهمج رعاع}",
      reference: "نهج البلاغة",
    },
    {
      text: "قال الله تعالى: {وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا}",
      reference: "الطلاق: 2",
    },
    {
      text: "قال رسول الله صلى الله عليه وسلم: {من بنى مسجداً بنى الله له بيتاً في الجنة}",
      reference: "رواه البخاري",
    },
    {
      text: "قال الإمام الحسين عليه السلام: {إن كان دين محمد لم يستقم إلا بقتلي يا سيوف خذيني}",
      reference: "مقتل الحسين",
    },
  ];

  // تغيير الوقائع كل 5 ثوان
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % religiousFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 py-8">
          {/* العنوان الرئيسي */}

          {/* بطاقة الترحيب */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl border-2 border-orange-200 p-8 sm:p-12">
              {/* رسالة ترحيب حسب الدور */}
              <div className="text-center mb-8">
                {parseCurrentUser?.role === "SUPERADMIN" ? (
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-4">
                      مرحباً بك
                    </h2>
                  </div>
                ) : parseCurrentUser?.role === "ADMIN" ? (
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-4">
                      مرحباً بك أيها المدير
                    </h2>
                    <p className="text-lg text-orange-600 mb-6">
                      يمكنك إدارة مؤسستك والمناسبات المرتبطة بها
                    </p>
                    <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                      ADMIN
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-4">
                      مرحباً بك في النظام
                    </h2>
                  </div>
                )}
              </div>

              {/* الوقائع الدينية */}
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-8 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">
                  حكمة اليوم
                </h3>
                <div className="text-center">
                  <p className="text-lg text-orange-700 font-medium leading-relaxed mb-3">
                    {religiousFacts[currentFact].text}
                  </p>
                  <p className="text-sm text-orange-600 font-semibold">
                    {religiousFacts[currentFact].reference}
                  </p>
                </div>
                {/* مؤشرات النقاط */}
                <div className="flex justify-center mt-4 space-x-2">
                  {religiousFacts.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentFact
                          ? "bg-orange-500 w-8"
                          : "bg-orange-300"
                        }`}
                      onClick={() => setCurrentFact(index)}
                    />
                  ))}
                </div>
              </div>

              {/* زر الانتقال */}
              <div className="text-center">
                <Link href={`${roleRedirect}`}>
                  <button className="group bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-300">
                    <span className="flex items-center justify-center space-x-3">
                      <span>دخول لوحة الإدارة</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center border border-orange-300 shadow-lg">
              <div className="text-3xl font-bold text-orange-700 mb-2">
                500+
              </div>
              <div className="text-orange-600 font-medium">مؤسسة دينية</div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-6 text-center border border-amber-300 shadow-lg">
              <div className="text-3xl font-bold text-amber-700 mb-2">370+</div>
              <div className="text-amber-600 font-medium">مناسبة دينية</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-200 rounded-2xl p-6 text-center border border-orange-300 shadow-lg">
              <div className="text-3xl font-bold text-orange-700 mb-2">
                1000+
              </div>
              <div className="text-orange-600 font-medium">مستفيد</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
