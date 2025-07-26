type props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};
export default function Categories({ categories, selectedCategory, setSelectedCategory }: props) {
  return (
    <div className="flex flex-wrap md:flex-row gap-1 overflow-x-auto md:overflow-visible">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1 rounded-3xl font-semibold text-white ${
            selectedCategory === cat ? "bg-blue-600" : "bg-blue-400"
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
