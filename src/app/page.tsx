'use client';

import React, { useState } from 'react';
import { themes } from '@/data/themes';
import ThemeCard from '@/components/ThemeCard';
import styles from './page.module.css';

const CATEGORIES = ['All', 'Lofi', 'Anime', 'Retro', 'Minimal', 'Cyberpunk', 'Nature'];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredThemes = themes.filter(theme => {
    const matchesSearch = 
      theme.name.toLowerCase().includes(search.toLowerCase()) ||
      theme.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
      theme.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || theme.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Warped<span>Aesthetics</span></h1>
        <p className={styles.subtitle}>Sleek, lo-fi, and creative themes for your Warp terminal.</p>
        
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search themes (e.g. lofi, neon, dark)..." 
            className={styles.searchBar}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.filterContainer}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <section className={styles.gallery}>
        {filteredThemes.length > 0 ? (
          filteredThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>No themes found matching your criteria</h3>
            <p>Try adjusting your search or switching categories.</p>
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <p>© 2026 WarpedAesthetics. Built for the Warp community.</p>
      </footer>
    </main>
  );
}
