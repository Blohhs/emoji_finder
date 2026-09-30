import React, { useState, useEffect } from 'react';
import { getEmojis, type IEmojiItem } from '../api/emojiApi';
import EmojiCard from './EmojiCard';
import './EmojiFinder.css';

const EmojiFinder: React.FC = () => {
  const [emojis, setEmojis] = useState<IEmojiItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEmojis(searchTerm);
        setEmojis(data);
      } catch (err) {
        setError('Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div className="emoji-finder">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Введите название или ключевое слово..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input-field"
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')} className="clear-button">
            Очистить
          </button>
        )}
      </div>

      {loading && <div className="loading-message">Загрузка эмодзи...</div>}
      {error && <div className="error-message">{error}</div>}
      
      {!loading && !error && emojis.length === 0 && (
        <p className="empty-message">Эмодзи не найдены</p>
      )}

      {!loading && !error && emojis.length > 0 && (
        <div className="emoji-grid">
          {emojis.map((emoji) => (
            <EmojiCard
              key={emoji.id}
              emoji={emoji.emoji}
              title={emoji.title}
              description={emoji.keywords}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiFinder;