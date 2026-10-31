const fs = require("fs");
const filePath = "./components/global/header.tsx";
let code = fs.readFileSync(filePath, "utf8");

// normalize line breaks
const isCrlf = code.includes("\r\n");
let normalized = code.replace(/\r\n/g, "\n");

const targetEffect = `  // Click outside listener to close search suggestion dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        (!desktopSearchRef.current || !desktopSearchRef.current.contains(target)) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(target))
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);`;

const replacementEffect = `  // Close search dropdown on scroll or outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        (!desktopSearchRef.current || !desktopSearchRef.current.contains(target)) &&
        (!mobileSearchRef.current || !mobileSearchRef.current.contains(target))
      ) {
        setIsDropdownOpen(false);
      }
    }

    function handleWindowScroll() {
      setIsDropdownOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);`;

if (!normalized.includes(targetEffect)) {
  console.error("Target effect not found!");
  process.exit(1);
}

normalized = normalized.replace(targetEffect, replacementEffect);

// Add onClick to desktop search input
const desktopFocusTarget = `                  onFocus={() => {
                    if (query.trim()) setIsDropdownOpen(true);
                  }}`;
const desktopFocusReplacement = `                  onFocus={() => {
                    if (query.trim()) setIsDropdownOpen(true);
                  }}
                  onClick={() => {
                    if (query.trim()) setIsDropdownOpen(true);
                  }}`;

normalized = normalized.replace(desktopFocusTarget, desktopFocusReplacement);

// Add onClick to mobile search input
const mobileFocusTarget = `                onFocus={() => {
                  if (query.trim()) setIsDropdownOpen(true);
                }}`;
const mobileFocusReplacement = `                onFocus={() => {
                  if (query.trim()) setIsDropdownOpen(true);
                }}
                onClick={() => {
                  if (query.trim()) setIsDropdownOpen(true);
                }}`;

normalized = normalized.replace(mobileFocusTarget, mobileFocusReplacement);

if (isCrlf) {
  normalized = normalized.replace(/\n/g, "\r\n");
}

fs.writeFileSync(filePath, normalized, "utf8");
console.log("Successfully patched header.tsx");

