// Auto-calculate and display reading time for Boldly Balance articles
(function() {
    'use strict';
    
    // Only run on post pages (which have .post-content class)
    const postContent = document.querySelector('.post-content article');
    if (!postContent) return;
    
    // Get all text content
    const text = postContent.innerText || postContent.textContent || '';
    const wordCount = text.trim().split(/\s+/).length;
    
    // Average reading speed: 200 words per minute
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    
    // Find or create reading time element
    const tag = postContent.querySelector('.tag');
    if (tag) {
        const readingTimeEl = document.createElement('p');
        readingTimeEl.style.cssText = 'margin:0.5rem 0;color:#a1a1aa;font-size:0.85rem;';
        readingTimeEl.textContent = `⏱️ ${readingTime} min read`;
        tag.parentNode.insertBefore(readingTimeEl, tag.nextSibling);
    }
})();
