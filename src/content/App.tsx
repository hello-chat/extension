type AppProps = {
  onClose: () => void;
};

const App = ({ onClose }: AppProps) => {
  return (
    <div>
      <button onClick={onClose}>close</button>
      <div>Hello-Chat-app</div>
    </div>
  );
};

export default App;
