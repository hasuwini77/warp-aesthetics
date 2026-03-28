'use client';

import React, { useState } from 'react';
import { themes } from '@/data/themes';
import ThemeCard from '@/components/ThemeCard';
import styles from './page.module.css';

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredThemes = themes.filter(theme => 
    theme.name.toLowerCase().includes(search.toLowerCase()) ||
    theme.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
    theme.description.toLowerCase().includes(search.toLowerCase())
  );

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
      </header>

      <section className={styles.gallery}>
        {filteredThemes.length > 0 ? (
          filteredThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>No themes found matching "{search}"</h3>
            <p>Try searching for different keywords or tags.</p>
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <p>© 2026 WarpedAesthetics. Built for the Warp community.</p>
      </footer>
    </main>
  );
}
