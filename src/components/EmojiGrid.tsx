import EmojiCard from './EmojiCard';
import './EmojiGrid.css';

const mockEmojis = [
  {
    emoji: '💯',
    title: '100',
    description: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    emoji: '🔢',
    title: '1234',
    description: 'input symbol for numbers symbol',
  },
  {
    emoji: '🔢',
    title: '1234',
    description: 'input symbol for numbers symbol',
  },
];

const EmojiGrid = () => {
  return (
    <div className="emoji-grid">
      {mockEmojis.map((item, index) => (
        <EmojiCard
          key={index}
          emoji={item.emoji}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default EmojiGrid;