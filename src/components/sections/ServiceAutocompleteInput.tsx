"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search, Sparkles, X } from "lucide-react";
import type {
  CatalogServiceOption,
  IntakeCategoryId,
} from "@/data/projectIntakeCatalog";
import { cn } from "@/lib/utils";

interface ServiceAutocompleteInputProps {
  allServices: CatalogServiceOption[];
  selectedCategories: IntakeCategoryId[];
  selectedService: CatalogServiceOption | null;
  onSelectService: (service: CatalogServiceOption | null) => void;
}

export function ServiceAutocompleteInput({
  allServices,
  selectedCategories,
  selectedService,
  onSelectService,
}: ServiceAutocompleteInputProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>(selectedService?.title ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Keep input text synced when selectedService changes externally (e.g. URL context or Reset)
  useEffect(() => {
    setQuery(selectedService?.title ?? "");
  }, [selectedService]);

  // Close suggestions dropdown on outside click
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        // Restore committed service title if user blurred without selecting another match
        setQuery(selectedService?.title ?? "");
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [selectedService]);

  const suggestions = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    // When input matches current selected service exactly or is blank on focus, show popular items from active categories
    const isShowingSelectedTitleOnly =
      selectedService && trimmed === selectedService.title.toLowerCase();

    if (!trimmed || isShowingSelectedTitleOnly) {
      return allServices
        .filter((srv) => selectedCategories.includes(srv.categoryId))
        .slice(0, 12);
    }

    const scored: { item: CatalogServiceOption; score: number }[] = [];
    for (const srv of allServices) {
      const titleLower = srv.title.toLowerCase();
      const subLower = srv.subCategoryName.toLowerCase();
      const catLower = srv.categoryName.toLowerCase();
      const inSelectedCat = selectedCategories.includes(srv.categoryId);

      let score = 0;
      if (titleLower === trimmed) score = 10;
      else if (titleLower.startsWith(trimmed)) score = 7;
      else if (titleLower.includes(trimmed)) score = 5;
      else if (subLower.includes(trimmed)) score = 3;
      else if (catLower.includes(trimmed)) score = 2;

      if (score > 0) {
        if (inSelectedCat) score += 2;
        scored.push({ item: srv, score });
      }
    }

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((s) => s.item);
  }, [allServices, query, selectedCategories, selectedService]);

  const handlePick = (srv: CatalogServiceOption | null) => {
    onSelectService(srv);
    setQuery(srv?.title ?? "");
    setIsOpen(false);
    setActiveIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setIsOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        suggestions.length > 0 ? (prev + 1) % suggestions.length : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        suggestions.length > 0
          ? (prev - 1 + suggestions.length) % suggestions.length
          : 0
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      if (isOpen && suggestions[activeIndex]) {
        handlePick(suggestions[activeIndex]);
      } else if (!isOpen) {
        setIsOpen(true);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setQuery(selectedService?.title ?? "");
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label
        htmlFor="specific-service-input"
        className="block font-mono text-xs font-semibold uppercase tracking-wider text-navy"
      >
        Specific Focus Service (Optional — Type for Suggestions)
      </label>

      <div className="relative mt-2">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          id="specific-service-input"
          type="text"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="service-suggestions-listbox"
          aria-activedescendant={
            isOpen && suggestions[activeIndex]
              ? `service-suggestion-opt-${activeIndex}`
              : undefined
          }
          value={query}
          onFocus={() => {
            setIsOpen(true);
            setActiveIndex(0);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActiveIndex(0);
            if (!e.target.value.trim() && selectedService) {
              onSelectService(null);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type to search services (e.g. Shopify, SaaS MVP, Logo, Flutter)..."
          className="w-full rounded-xl border border-navy/15 bg-surface py-3 pl-11 pr-16 text-sm font-medium text-navy placeholder:text-ink-muted/70 focus:border-navy focus:bg-white focus:ring-2 focus:ring-gold/40 focus:outline-none"
        />

        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {(query || selectedService) && (
            <button
              type="button"
              onClick={() => {
                handlePick(null);
                inputRef.current?.focus();
              }}
              aria-label="Clear selected focus service"
              className="rounded-full p-1 text-navy/60 hover:bg-navy/10 hover:text-navy"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              inputRef.current?.focus();
            }}
            aria-label={isOpen ? "Hide suggestions" : "Show service suggestions"}
            className="rounded-full p-1 text-navy/60 hover:bg-navy/10 hover:text-navy"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-150",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>

      {/* Selected Context Feedback Pill */}
      {selectedService ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-navy">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-gold-deep" />
          <span>
            Selected:{" "}
            <strong className="font-semibold">{selectedService.categoryName}</strong> ·{" "}
            {selectedService.subCategoryName} → {selectedService.title}
          </span>
        </p>
      ) : (
        <p className="mt-1.5 text-xs text-ink-muted">
          Start typing any deliverable name or leave blank for General / Multi-Service Scope.
        </p>
      )}

      {/* Auto-Suggestion Popup Listbox */}
      {isOpen && (
        <div
          id="service-suggestions-listbox"
          role="listbox"
          aria-label="Matching service suggestions"
          className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-navy/15 bg-white p-1.5 shadow-[0_18px_45px_rgba(10,25,47,0.16)]"
        >
          {/* Option to stick with General / Multi-Service Scope */}
          <button
            type="button"
            role="option"
            aria-selected={!selectedService && suggestions.length === 0}
            onMouseDown={(e) => {
              e.preventDefault();
              handlePick(null);
            }}
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-left text-xs transition-none",
              !selectedService
                ? "bg-surface font-semibold text-navy"
                : "text-ink-muted hover:bg-surface hover:text-navy"
            )}
          >
            <span>General / Multi-Service Scope Across Selected Categories</span>
            {!selectedService && <Check className="h-3.5 w-3.5 shrink-0 text-gold-deep" />}
          </button>

          {suggestions.length > 0 ? (
            <div className="mt-1 space-y-0.5 border-t border-navy/8 pt-1">
              {suggestions.map((srv, idx) => {
                const isActive = idx === activeIndex;
                const isSelected = selectedService?.serviceId === srv.serviceId;
                const isExternalCat = !selectedCategories.includes(srv.categoryId);

                return (
                  <button
                    key={srv.serviceId}
                    id={`service-suggestion-opt-${idx}`}
                    type="button"
                    role="option"
                    aria-selected={isActive || isSelected}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handlePick(srv);
                    }}
                    className={cn(
                      "transition-none flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left",
                      isActive || isSelected
                        ? "bg-navy text-white"
                        : "text-navy hover:bg-surface"
                    )}
                  >
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "truncate text-sm font-semibold",
                          isActive || isSelected ? "text-gold" : "text-navy"
                        )}
                      >
                        {srv.title}
                      </p>
                      <p
                        className={cn(
                          "truncate text-xs",
                          isActive || isSelected ? "text-white/80" : "text-ink-muted"
                        )}
                      >
                        {srv.categoryName} · {srv.subCategoryName}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {isExternalCat && (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold",
                            isActive || isSelected
                              ? "bg-gold text-navy"
                              : "border border-navy/15 bg-surface text-navy"
                          )}
                        >
                          + Category
                        </span>
                      )}
                      {isSelected && (
                        <Check
                          className={cn(
                            "h-4 w-4 shrink-0",
                            isActive || isSelected ? "text-gold" : "text-gold-deep"
                          )}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-1 border-t border-navy/8 px-3.5 py-4 text-center text-xs text-ink-muted">
              No catalog match for &ldquo;{query}&rdquo; — keep typing or describe custom needs in
              Step 2.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
