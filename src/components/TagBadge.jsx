function TagBadge({ label }) {
  const colorMap = {
    Technology: "bg-blue-100 text-blue-600",
    Programming: "bg-green-100 text-green-600",
    Design: "bg-pink-100 text-pink-600",
    Conference: "bg-purple-100 text-purple-600",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
        colorMap[label] || "bg-gray-100 text-gray-600"
      }`}
    >
      {label}
    </span>
  );
}

export default TagBadge
