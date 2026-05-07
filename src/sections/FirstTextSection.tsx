const FirstTextSection = () => {
  return (
    <section className="first-text-section flex-center px-20 md:px-40 xl:px-56 2xl:px-72">
      <div className="gradient-text flex w-full max-w-5xl flex-col items-start gap-6 text-start">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Vice City, États-Unis</h1>

        <p className="text-xl md:text-xl lg:text-3xl">
          Jason et Lucia ont toujours su que la vie ne leur ferait pas de cadeau. Mais lorsque les
          choses tournent mal, ils découvrent le côté obscur de la région la plus ensoleillée
          d'Amérique, et se retrouvent au cœur d'un complot criminel qui s'étend dans tout l'État de
          Leonida. Ils devront plus que jamais compter l'un sur l'autre pour espérer s'en sortir
          vivants.
        </p>
      </div>
    </section>
  );
};

export default FirstTextSection;
