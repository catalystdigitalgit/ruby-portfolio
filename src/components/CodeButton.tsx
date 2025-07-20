import Icon from './Icon';

const CodeButton = () => {
  return (
    <a
      href="https://github.com/catalystdigitalgit/ruby-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-secondary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-primary/25 text-feature"
      aria-label="View source code on GitHub"
    >
      <Icon name="code" size="lg" />
    </a>
  );
};

export default CodeButton;
