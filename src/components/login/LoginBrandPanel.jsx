function LoginBrandPanel() {
  return (
    <section className="hidden md:flex md:w-1/2 relative network-gradient items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/30 animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-white/20 animate-bounce"
          style={{ animationDuration: '8s' }}
        />
      </div>
      <div className="relative z-10 p-xl text-center max-w-lg">
        <h1 className="font-headline-xl text-headline-xl text-white mb-md">Cognitive Flow</h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-xl">
          Unlock deep learning states through precision AI-driven educational paths. Your progress, synchronized.
        </p>
        <div className="rounded-xl glass-panel p-md shadow-xl text-left border-white/20">
          <div className="flex items-center gap-sm mb-base">
            <div className="w-xs h-8 bg-accent-cta rounded-full" />
            <span className="font-label-md text-label-md text-primary-container font-bold">ACTIVE SESSION</span>
          </div>
          <div className="space-y-sm">
            <div className="h-2 w-3/4 bg-primary-container/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary-container w-2/3" />
            </div>
            <p className="font-body-sm text-body-sm text-primary-container/80 italic">
              "Neural pathways optimizing for advanced calculus modules..."
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full px-xl">
        <img
          alt="Neural Network Visualization"
          className="w-full h-auto object-contain translate-y-12"
          data-alt="A sophisticated, minimalist professional illustration of a neural network with glowing nodes and connecting lines in deep slate blue and periwinkle. The background is a clean, modern gradient that feels technological yet approachable. The lighting is soft and diffused, emphasizing a sense of flow and organized complexity, perfectly matching a premium ed-tech aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY69mtesXfW-27rfSpi6Sj-I3269FGLZNh_0ub2W705a_FfkmjmRqZI9y6ywC43ofZZeBXlrBTRe94mEkQH2Je9qP8uaN-5n45stJPtLhnxI5zhv7wi-hjfznOp6V02OAMBSqV8_UFNK3v5RMewESN2yh3svXtY_Vzg8ctFQkzIB8RwxmDASDUmjrLn4zqvU4YQwI3DZnSI3C4GPUriabFcDIog6Ej4WxGOuFC0fAn35WOMkfBa02drnC50I-czUnm6EMpg1tST0w"
        />
      </div>
    </section>
  )
}

export default LoginBrandPanel
