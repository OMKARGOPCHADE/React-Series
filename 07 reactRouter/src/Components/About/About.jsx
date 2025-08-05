import React from 'react';
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://lh3.googleusercontent.com/proxy/ei_FLtuNdfmVnjeEFbPY6yHuehavVtHKjZMeEh2PWPltbUlArNVUDGvS3ePUI6fu-oDxy8-WAkW3f28HTU5JatUkMUbVvW0e"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        महाराष्ट्रात ड्रॅगन फ्रुट शेतीला शेतकऱ्यांचा वाढता प्रतिसाद मिळत आहे.

                        </h2>
                        <p className="mt-6 text-gray-600">
                        महाराष्ट्रातील शेतकरी सध्या ड्रॅगन फ्रुट शेतीकडे वळताना दिसत आहेत. कमी पाणी लागणारी आणि जास्त नफा देणारी ही फळपीक असल्याने, राज्यात तिची लागवड वाढत आहे. विशेषतः पुणे, सोलापूर आणि नाशिक जिल्ह्यांमध्ये ड्रॅगन फ्रुट शेतीला चांगला प्रतिसाद मिळत आहे.

                        </p>
                        <p className="mt-4 text-gray-600">
                        ड्रॅगन फ्रुट निर्यातक्षम असल्याने शेतकऱ्यांना आंतरराष्ट्रीय बाजारपेठेत संधी मिळत आहे. शासनही या पीकासाठी अनुदान आणि प्रशिक्षणाच्या माध्यमातून शेतकऱ्यांना प्रोत्साहन देत आहे.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}