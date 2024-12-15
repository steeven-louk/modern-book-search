"use client"
import { ArrowBigUpDashIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'



export const ScrollToTop = () => {
      const [showGoTop, setShowGoTop] = useState(false);
    
      // Fonction pour afficher/masquer le bouton
      const handleVisibleButton = () => {
        setShowGoTop(window.scrollY > 780);
      };
    
      // Fonction pour remonter en haut de la page
      const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      };
    
      useEffect(() => {
        // Ajouter l'écouteur d'événement pour le défilement
        window.addEventListener('scroll', handleVisibleButton);
    
        // Nettoyage de l'effet : suppression de l'écouteur
        return () => {
          window.removeEventListener('scroll', handleVisibleButton);
        };
      }, []);
    return (
        <>
            {showGoTop && (
        <button
          onClick={handleScrollUp}
          className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600  transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowBigUpDashIcon className="text-white text-2xl w-8 h-8"/>
        </button>
      )}
        </>
    )
}
