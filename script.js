// وظيفة لتشغيل الرسوم المتحركة
function playAnimation(animationId) {
  const animationBox = document.getElementById(animationId);
  animationBox.innerHTML = "تشغيل الرسوم...";
  
  // حركة بسيطة
  setTimeout(() => {
    animationBox.innerHTML = "🚶‍♂️ الحركة قيد التشغيل...";
  }, 1000);

  setTimeout(() => {
    animationBox.innerHTML = "عرض الحركة هنا";
  }, 5000);
}
