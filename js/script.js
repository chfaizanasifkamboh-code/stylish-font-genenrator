/**
 * FontVault - Core UI Architecture
 * Senior Developer Fixed Implementation: Left-Aligned Auto-Resizing & Spectrum Renderers
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global Application State Trackers
  let currentCategory = "all";
  const fontInput = document.getElementById("fontInput");
  const fontGrid = document.getElementById("fontGrid");
  const clearBtn = document.getElementById("clearBtn");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const themeSelect = document.getElementById("themeSelect");
  const toastContainer = document.getElementById("toastContainer");

  /* ==========================================================================
     1. THEME SWITCHER CONTROLLER (Dynamic Text Width Auto-Fitting & Left Aligned)
     ========================================================================== */
  if (themeSelect) {
    const adjustDropdownWidth = () => {
      const selectedText = themeSelect.options[themeSelect.selectedIndex].text;
      
      // Create a temporary hidden canvas text node to scan real pixel widths
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = "700 0.85rem 'Plus Jakarta Sans', sans-serif"; // Matches CSS exactly
      
      const textWidth = context.measureText(selectedText).width;
      
      // Desktop sizing calculation based on chosen string length
      if (window.innerWidth > 768) {
        // Enforce perfect left alignment adjustments
        themeSelect.style.textAlign = "left";
        themeSelect.style.width = `${textWidth + 84}px`; // Fits content + safety arrow clearance padding
      } else {
        themeSelect.style.width = "100%"; // Adapts smoothly to fill mobile viewport widths
      }
    };

    // Run measurement layout instantly on boot setup
    adjustDropdownWidth();
    window.addEventListener("resize", adjustDropdownWidth);

    themeSelect.addEventListener("change", (event) => {
      const selectedTheme = event.target.value;
      
      // Inject attribute marker right onto document body layer instantly
      document.body.setAttribute("data-theme", selectedTheme);
      
      // Recalculate size instantly to fit new text size layout
      adjustDropdownWidth();
    });
  }

  // Initialize Rendering System on application boot
  renderFontGrid();

  /* ==========================================================================
     2. REAL-TIME INPUT EVENT LISTENERS
     ========================================================================== */
  fontInput.addEventListener("input", (e) => {
    const value = e.target.value;
    
    // Toggle the visible status of the clear field button utility
    if (value.length > 0) {
      clearBtn.classList.add("visible");
    } else {
      clearBtn.classList.remove("visible");
    }

    // Trigger grid transformation loop instantly (0ms latency execution)
    renderFontGrid();
  });

  // Action binding for input clear button click
  clearBtn.addEventListener("click", () => {
    fontInput.value = "";
    clearBtn.classList.remove("visible");
    fontInput.focus();
    renderFontGrid();
  });

  /* ==========================================================================
     3. SEGMENTED CATEGORY FILTER LINK ENGINE
     ========================================================================== */
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove visual active class loops from old options
      filterButtons.forEach(btn => btn.classList.remove("active"));
      
      // Assign active status onto current targeted category
      button.classList.add("active");
      currentCategory = button.getAttribute("data-category");

      // Re-render display layout reflecting new category parameters
      renderFontGrid();
    });
  });

  /* ==========================================================================
     4. DYNAMIC DOM CARD RENDERING SYSTEM
     ========================================================================== */
  function renderFontGrid() {
    const rawInput = fontInput.value;
    
    // Pipe string directly through the font-engine map transformer API
    const processedStyles = transformText(rawInput);
    
    // Wipe out the old HTML layout cards before rewriting updated entries
    fontGrid.innerHTML = "";

    // Loop through results dataset array strings
    processedStyles.forEach(style => {
      // Multi-category filtering condition logic
      if (currentCategory !== "all" && style.category !== currentCategory) {
        return; // Skip rendering card if it belongs to an unselected tab
      }

      // Construct structural HTML element card wrappers dynamically
      const card = document.createElement("article");
      card.className = `font-card ${style.isPlaceholder ? "placeholder-active" : ""}`;
      card.setAttribute("tabindex", "0"); // Allows keyboard navigation focus actions
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Copy text in ${style.name} style`);

      // SEALS VALUE DELIVERIES SECURELY INSIDE THE .output-string PARSER NODE
      card.innerHTML = `
        <div class="card-header-info">
          <span class="font-label">${style.name}</span>
          <span class="copy-badge"><i class="fa-regular fa-copy" aria-hidden="true"></i> Copy</span>
        </div>
        <div class="output-string">${style.value}</div>
      `;

      /* ==========================================================================
         5. ASYNC CLIPBOARD COPY OPERATIONS
         ========================================================================== */
      const executeCopyAction = () => {
        // Fallback guard: Prevent users from copying the layout placeholder text values
        if (style.isPlaceholder) {
          showNotification("Please type something before copying!", "warning");
          return;
        }

        // Native async browser Clipboard write injection
        navigator.clipboard.writeText(style.value)
          .then(() => {
            showNotification(`Copied ${style.name} variant successfully!`);
            
            // Visual bounce click effect feedback confirmation
            card.style.transform = "scale(0.96)";
            setTimeout(() => {
              card.style.transform = "";
            }, 100);
          })
          .catch(err => {
            console.error("System failed to execute clipboard stream access: ", err);
          });
      };

      // Mouse interactive binding
      card.addEventListener("click", executeCopyAction);

      // Keyboard accessible accessibility activation binding (Enter key focus)
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          executeCopyAction();
        }
      });

      // Inject fully engineered component node tree straight into layout container grid
      fontGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     6. NOTIFICATION TOAST FEEDBACK ALERT ENGINE
     ========================================================================== */
  function showNotification(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = "toast-alert";
    
    // Choose appropriate visual confirmation icon elements
    const icon = type === "success" 
      ? '<i class="fa-solid fa-circle-check" style="color: #a7f3d0;"></i>' 
      : '<i class="fa-solid fa-circle-exclamation" style="color: #fef3c7;"></i>';

    if (type === "warning") {
      toast.style.backgroundColor = "#92400e";
      toast.style.borderColor = "#d97706";
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    // Append structured alert banner node inside global layout toast shelf
    toastContainer.appendChild(toast);

    // Automatically animate removal transitions smoothly out of DOM view
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px) scale(0.95)";
      toast.style.transition = "all 0.3s ease-out";
      
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2500);
  }
});
