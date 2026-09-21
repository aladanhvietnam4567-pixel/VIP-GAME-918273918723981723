import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Dice5,
  X,
  Sparkles,
  Flame,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  CheckCircle2,
  Trophy,
  Volume2
} from 'lucide-react';
import {
  searchStorylines,
  getRandomStoryline,
  STORYLINE_CATEGORIES,
  TOTAL_STORYLINES,
  HilariousRaceStoryline
} from '../engine/storylineEngine';
import { speakCommentaryTTS } from '../engine/commentaryGenerator';

interface StorylinesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStoryline?: (storyline: HilariousRaceStoryline) => void;
}

export const StorylinesModal: React.FC<StorylinesModalProps> = ({
  isOpen,
  onClose,
  onSelectStoryline
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [featuredStoryline, setFeaturedStoryline] = useState<HilariousRaceStoryline | null>(() => getRandomStoryline());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const pageSize = 12;

  const { items, totalCount, totalPages } = useMemo(() => {
    return searchStorylines(searchQuery, selectedCategory, currentPage, pageSize, lang);
  }, [searchQuery, selectedCategory, currentPage, pageSize, lang]);

  if (!isOpen) return null;

  const handleRollRandom = () => {
    const rolled = getRandomStoryline();
    setFeaturedStoryline(rolled);
    // Scroll to top or highlight
  };

  const handleSpeakHook = (text: string) => {
    speakCommentaryTTS(text, undefined, lang);
  };

  const handleCopyText = (story: HilariousRaceStoryline) => {
    const title = lang === 'en' ? story.titleEn : story.titleVi;
    const premise = lang === 'en' ? story.premiseEn : story.premiseVi;
    const hook = lang === 'en' ? story.commentaryHookEn : story.commentaryHookVi;
    const full = `[${title}]\n${premise}\n\n🎙️ BLV: ${hook}`;
    navigator.clipboard?.writeText(full);
    setCopiedId(story.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-slate-900 border border-cyan-500/30 w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-wide text-white uppercase flex items-center gap-1.5">
                  Kho 3,000 Cốt Truyện Kịch Bản Hài Hước
                  <span className="text-amber-400 text-xs px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 font-mono">
                    3,000 / 3,000 ĐỘC BẢN
                  </span>
                </h2>
              </div>
              <p className="text-xs text-slate-400">
                Tự động sinh ngẫu nhiên theo Seed cho từng luồng đua • Tích hợp bình luận viên F1 sân cỏ & phụ đề video 60 FPS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(l => l === 'vi' ? 'en' : 'vi')}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-cyan-300 transition cursor-pointer"
              title="Chuyển đổi ngôn ngữ hiển thị"
            >
              {lang === 'vi' ? '🇻🇳 TIẾNG VIỆT' : '🇬🇧 ENGLISH'}
            </button>

            <button
              onClick={handleRollRandom}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-slate-950 text-xs font-black shadow-md transition active:scale-95 cursor-pointer"
            >
              <Dice5 className="w-4 h-4" />
              BỐC NGẪU NHIÊN
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="px-6 py-3 border-b border-slate-800 bg-slate-900/90 flex flex-col md:flex-row gap-3 items-center justify-between shrink-0">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm theo cầu thủ, nồi lẩu, shopee, #0128..."
              className="w-full pl-9 pr-4 py-1.5 bg-slate-950 border border-slate-700 focus:border-cyan-500 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Categories Pill list */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {STORYLINE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    active
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {lang === 'vi' ? cat.nameVi : cat.nameEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Body Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          
          {/* Featured Spotlight Card */}
          {featuredStoryline && (
            <div className="relative overflow-hidden rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-rose-950/30 p-4 shadow-xl">
              <div className="absolute top-2 right-3 flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                KỊCH BẢN ĐANG ĐƯỢC CHỌN (SPOTLIGHT)
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="space-y-1.5 flex-1 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-black">
                      #{featuredStoryline.index.toString().padStart(4, '0')}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-bold">
                      {lang === 'vi' ? featuredStoryline.categoryVi : featuredStoryline.categoryEn}
                    </span>
                    <span className="text-xs text-rose-400 font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-rose-500" />
                      {featuredStoryline.protagonist} ⚔️ {featuredStoryline.antagonist}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white">
                    {lang === 'en' ? featuredStoryline.titleEn : featuredStoryline.titleVi}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'en' ? featuredStoryline.premiseEn : featuredStoryline.premiseVi}
                  </p>

                  {/* Commentary Hook */}
                  <div className="mt-2 p-2.5 rounded-lg bg-slate-950/80 border border-amber-500/30 flex items-start gap-2">
                    <MessageSquareQuote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-200 font-medium italic">
                      {lang === 'en' ? featuredStoryline.commentaryHookEn : featuredStoryline.commentaryHookVi}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-2 shrink-0 pt-2">
                  <button
                    onClick={() => handleSpeakHook(lang === 'en' ? featuredStoryline.commentaryHookEn : featuredStoryline.commentaryHookVi)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition active:scale-95 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    NGHE THỬ BLV
                  </button>

                  <button
                    onClick={() => handleCopyText(featuredStoryline)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition active:scale-95 cursor-pointer"
                  >
                    {copiedId === featuredStoryline.id ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : null}
                    {copiedId === featuredStoryline.id ? 'ĐÃ SAO CHÉP' : 'SAO CHÉP KỊCH BẢN'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Grid List of Storylines */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400">
                Hiển thị {items.length} / {totalCount} kịch bản phù hợp (Trang {currentPage}/{totalPages || 1})
              </span>
            </div>

            {items.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-30" />
                <p className="text-sm">Không tìm thấy kịch bản nào phù hợp với từ khóa "{searchQuery}"</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {items.map((story) => {
                  const isFeatured = featuredStoryline?.id === story.id;
                  return (
                    <div
                      key={story.id}
                      onClick={() => setFeaturedStoryline(story)}
                      className={`p-3.5 rounded-xl border transition cursor-pointer flex flex-col justify-between ${
                        isFeatured
                          ? 'bg-slate-950 border-amber-500/60 shadow-lg shadow-amber-500/10'
                          : 'bg-slate-950/60 hover:bg-slate-950 border-slate-800 hover:border-cyan-500/40'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-[10px] font-mono font-black text-cyan-300">
                            #{story.index.toString().padStart(4, '0')}
                          </span>
                          <span className="text-[10px] font-medium text-slate-400 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 truncate max-w-[140px]">
                            {lang === 'vi' ? story.categoryVi : story.categoryEn}
                          </span>
                        </div>

                        <h4 className="text-xs font-black text-white line-clamp-2">
                          {lang === 'en' ? story.titleEn : story.titleVi}
                        </h4>

                        <div className="text-[11px] text-rose-400/90 font-semibold truncate">
                          ⚔️ {story.protagonist} vs {story.antagonist}
                        </div>

                        <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                          {lang === 'en' ? story.premiseEn : story.premiseVi}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpeakHook(lang === 'en' ? story.commentaryHookEn : story.commentaryHookVi);
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-amber-400 hover:text-amber-300 transition"
                        >
                          <Volume2 className="w-3 h-3" />
                          Nghe BLV
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyText(story);
                          }}
                          className="text-[10px] font-medium text-slate-400 hover:text-slate-200"
                        >
                          {copiedId === story.id ? 'Đã chép' : 'Sao chép'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Modal Pagination Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            TỔNG CỘNG: <span className="text-cyan-400 font-bold">{TOTAL_STORYLINES.toLocaleString()}</span> KỊCH BẢN TẤU HÀI SẴN SÀNG
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage <= 1}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-mono disabled:cursor-not-allowed"
            >
              Đầu
            </button>

            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono px-2 text-cyan-300 font-bold">
              {currentPage} / {totalPages || 1}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage >= totalPages}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-mono disabled:cursor-not-allowed"
            >
              Cuối
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
