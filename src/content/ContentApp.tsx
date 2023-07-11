type ContentAppProps = {
  onClose: () => void;
};

const ContentApp = ({ onClose }: ContentAppProps) => {
  return (
    <div>
      <button onClick={onClose}>close</button>
      <div>Hello-Chat-app</div>
    </div>
  );
};

export default ContentApp;
