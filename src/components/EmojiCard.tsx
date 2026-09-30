import './EmojiCard.css';

interface EmojiCardProps {
  emoji: string;
  title: string;
  description: string;
}

const EmojiCard = ({ emoji, title, description }: EmojiCardProps) => {
  return (
    <div className="emoji-card">
      <div className="emoji-icon">{emoji}</div>
      <h3 className="emoji-title">{title}</h3>
      <p className="emoji-description">{description}</p>
    </div>
  );
};

export default EmojiCard;