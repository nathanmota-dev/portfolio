interface SkillCardProps {
    name: string
    Icon: React.ComponentType<{ className?: string }>
    bgColor: string
}

export default function SkillCard({ name, Icon, bgColor }: SkillCardProps) {
    const getColorValue = (colorClass: string) => {
        const colorMap: { [key: string]: string } = {
            'blue-500': '#3b82f6',
            'blue-600': '#2563eb',
            'blue-700': '#1d4ed8',
            'green-400': '#4ade80',
            'green-500': '#22c55e',
            'yellow-400': '#facc15',
            'yellow-500': '#eab308',
            'cyan-400': '#22d3ee',
            'cyan-500': '#06b6d4',
            'orange-500': '#f97316',
            'orange-600': '#ea580c',
            'purple-700': '#7c3aed',
            'gray-800': '#1f2937',
            'gray-700': '#374151',
            'black': '#000000',
            'red-500': '#ef4444',
            'blue-400': '#60a5fa',
            'green-600': '#16a34a',
            'green-200': '#bbf7d0',
            'purple-500': '#a855f7',
            'purple-600': '#9333ea',
            'pink-500': '#ec4899',
            'indigo-500': '#6366f1',
            'orange-200': '#fed7aa',
            'teal-500': '#14b8a6',
            'emerald-500': '#10b981',
            'violet-500': '#8b5cf6',
            'rose-500': '#f43f5e',
            'sky-500': '#0ea5e9',
            'amber-500': '#f59e0b',
            'gray-900': '#111827',
        };

        const cleanColor = colorClass.replace('bg-', '');
        return colorMap[cleanColor];
    };

    return (
        <div className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-white bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div
                className="mb-3 transition-colors duration-300"
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                        icon.style.color = getColorValue(bgColor);
                    }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) {
                        icon.style.color = '';
                    }
                }}
            >
                <Icon className="w-8 h-8 text-black dark:text-white transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{name}</span>
        </div>
    )
}