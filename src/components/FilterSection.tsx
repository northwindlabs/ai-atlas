import { Category } from '../data/services';

interface FilterSectionProps {
  showNewOnly: boolean;
  setShowNewOnly: (show: boolean) => void;
  filteredCategories: Category[];
}

export const FilterSection = ({
  showNewOnly,
  setShowNewOnly,
  filteredCategories,
}: FilterSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Services
        </h2>
        <button
          onClick={() => setShowNewOnly(!showNewOnly)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            showNewOnly
              ? 'bg-[var(--eu-yellow)] text-[var(--eu-blue)] shadow-md'
              : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30'
          }`}
        >
          <svg
            className={`w-5 h-5 ${showNewOnly ? 'text-[var(--eu-blue)]' : 'text-blue-500 dark:text-blue-400'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          <span className="font-medium">
            {showNewOnly ? 'Show all services' : 'Show newly added'}
          </span>
          {showNewOnly && (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-[var(--eu-blue)] text-white rounded">
              {filteredCategories.reduce(
                (count, category) =>
                  count +
                  category.services.filter((service) => {
                    if (!service.addedDate) return false;
                    const added = new Date(service.addedDate);
                    const today = new Date();
                    return (
                      added.getFullYear() === today.getFullYear() &&
                      added.getMonth() === today.getMonth()
                    );
                  }).length,
                0
              )}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
