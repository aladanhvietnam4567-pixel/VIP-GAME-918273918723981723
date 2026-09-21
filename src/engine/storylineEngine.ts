/**
 * STORYLINE ENGINE - 3,000 CỐT TRUYỆN KỊCH BẢN HÀI HƯỚC NGẪU NHIÊN
 * Hệ thống sinh 3,000 cốt truyện độc bản, hài hước, kịch tính cho các luồng đua xe
 * Kết hợp 60 danh thủ sân cỏ thế giới, các tình huống dở khóc dở cười và mức phạt tấu hài cực đại.
 */

export interface HilariousRaceStoryline {
  id: string;
  index: number;
  categoryVi: string;
  categoryEn: string;
  titleVi: string;
  titleEn: string;
  premiseVi: string;
  premiseEn: string;
  commentaryHookVi: string;
  commentaryHookEn: string;
  protagonist: string;
  antagonist: string;
}

export const TOTAL_STORYLINES = 3000;

export const STORYLINE_CATEGORIES = [
  { id: 'all', nameVi: 'Tất Cả (3,000)', nameEn: 'All (3,000)' },
  { id: 'bet', nameVi: 'Kèo Cá Cược Quái Đản', nameEn: 'Absurd Wagers' },
  { id: 'food', nameVi: 'Ẩm Thực & Nợ Căn-tin', nameEn: 'Food & Debts' },
  { id: 'romance', nameVi: 'Tin Nhắn & Tình Ái', nameEn: 'Romance & Texts' },
  { id: 'family', nameVi: 'Áp Lực Vợ & Gia Đình', nameEn: 'Family & Spousal Curfew' },
  { id: 'shopping', nameVi: 'Săn Sale & Tiền Bạc', nameEn: 'Flash Sales & Shopping' },
  { id: 'police', nameVi: 'Xe Cẩu & Nốt Gửi Xe', nameEn: 'Tow Trucks & Parking' },
  { id: 'gaming', nameVi: 'Tranh Cãi Game & Thể Diện', nameEn: 'Gaming Stats & Ego' },
  { id: 'music', nameVi: 'Vé Concert & Sự Kiện VIP', nameEn: 'VIP Concerts & Galas' },
  { id: 'sabotage', nameVi: 'Độ Xe & Sự Cố Hài', nameEn: 'Tuning Disasters' },
  { id: 'supersonic', nameVi: 'Tốc Độ Vũ Trụ & Đào Tẩu', nameEn: 'Supersonic Escapes' }
];

// Danh sách 60 siêu sao tham gia vai chính / vai phụ
const STAR_DRIVERS = [
  'Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr', 'Kylian Mbappe', 'Erling Haaland',
  'Kevin De Bruyne', 'David Beckham', 'Son Heung-min', 'Vinicius Jr', 'Jude Bellingham',
  'Luka Modric', 'Karim Benzema', 'Mohamed Salah', 'Harry Kane', 'Robert Lewandowski',
  'Bruno Fernandes', 'Marcus Rashford', 'Harry Maguire', 'Casemiro', 'Alisson Becker',
  'Manuel Neuer', 'Sergio Ramos', 'Pepe', 'Zlatan Ibrahimovic', 'Ronaldinho',
  'Kaka', 'Zinedine Zidane', 'Wayne Rooney', 'Thierry Henry', 'Ronaldo Nazario',
  'Phil Foden', 'Bukayo Saka', 'Rodri', 'Bernardo Silva', 'Antoine Griezmann',
  'Toni Kroos', 'Thomas Muller', 'Angel Di Maria', 'Federico Valverde', 'Eduardo Camavinga',
  'Gavi', 'Pedri', 'Lamine Yamal', 'Darwin Nunez', 'Luis Diaz',
  'Virgil van Dijk', 'Ruben Dias', 'Emiliano Martinez', 'Thibaut Courtois', 'Lautaro Martinez',
  'Julian Alvarez', 'Victor Osimhen', 'Khvicha Kvaratskhelia', 'Declan Rice', 'Martin Odegaard',
  'William Saliba', 'Joshua Kimmich', 'Kingsley Coman', 'Rafael Leao', 'Ousmane Dembele'
];

// Các nhân vật phụ gây bão
const SECONDARY_CHARACTERS = [
  'HLV Trưởng khó tính', 'Bác bảo vệ tổ dân phố', 'Em người yêu kiêu kỳ', 'Vợ đại ca quyền lực',
  'Chủ quán phở bò sốt vang', 'Chủ nợ lẩu nướng 500 củ', 'Shipper công nghệ chạy xe số', 'Trọng tài VAR',
  'Bà hàng xóm nhiều chuyện', 'Chủ tịch tập đoàn tài trợ', 'Thợ sửa xe lừa đảo', 'Bác cứu hộ cẩu xe'
];

// 25 Bối cảnh tình huống dở khóc dở cười
const INCITING_INCIDENTS = [
  {
    cat: 'romance',
    titleVi: 'Tin Nhắn Bố Mẹ Đi Vắng',
    titleEn: 'The Parents Out Of Town Text',
    descVi: (p: string, a: string) => `Em người yêu của ${p} vừa gửi tin nhắn nhầm cho cả ${a} và toàn bộ 15 tay đua: "Bố mẹ em vừa đi vắng, ai tới trước em thưởng nóng!"`,
    descEn: (p: string, a: string) => `${p}'s girlfriend accidentally broadcasted a text to ${a} and all 15 drivers: "My parents left town, first one to arrive gets a VIP prize!"`,
    hookVi: 'Nghe tin bố mẹ em đi vắng, các chiến thần đạp ga 650 km/h quên luôn đường về!',
    hookEn: 'That infamous emergency text just turned all 15 engines into screaming fighter jets!'
  },
  {
    cat: 'food',
    titleVi: 'Nồi Lẩu Bò Wagyu 500 Củ',
    titleEn: 'The $50,000 Wagyu Hotpot Bill',
    descVi: (p: string, a: string) => `HLV ra tối hậu thư: Ai về sau ${p} và ${a} phải móc ví thanh toán hóa đơn lẩu bò Wagyu 500 triệu và rửa bát 6 tháng cho toàn đội!`,
    descEn: (p: string, a: string) => `Manager ultimatum: Whoever finishes behind ${p} and ${a} must settle the squad's $50,000 Wagyu hotpot bill and wash dishes for six months!`,
    hookVi: 'Nỗi sợ viêm màng túi vì bữa lẩu bò khiến không ai dám nhấc chân khỏi bàn đạp ga!',
    hookEn: 'Bankruptcy from a five-figure restaurant tab is driving these machines past the redline!'
  },
  {
    cat: 'food',
    titleVi: 'Miếng Bánh Mì Kẹp Phô Mai Cuối Cùng',
    titleEn: 'The Last Stolen Sandwich Heist',
    descVi: (p: string, a: string) => `${p} phát hiện ${a} vừa ăn vụng miếng bánh mì kẹp phô mai bò hảo hạng cuối cùng trong tủ lạnh căn-tin, quyết tâm phóng xe đòi lại công lý!`,
    descEn: (p: string, a: string) => `${p} discovered ${a} sneaked the last gourmet beef sandwich from the team fridge and is pursuing vengeance on four wheels!`,
    hookVi: 'Trận chiến tốc độ vì miếng bánh mì kẹp, một tấc nhựa đường cũng không nhường!',
    hookEn: 'A feud over a stolen fridge sandwich has erupted into a supersonic dogfight!'
  },
  {
    cat: 'shopping',
    titleVi: 'Săn Sale Shopee 99% Chỉ Còn 90 Giây',
    titleEn: 'Flash Sale Closes in 90 Seconds',
    descVi: (p: string, a: string) => `Sàn thương mại điện tử mở Flash Sale giảm 99% dàn siêu xe và iPhone mới nhất, ${p} và ${a} chỉ còn đúng 90 giây để về đích thanh toán giỏ hàng!`,
    descEn: (p: string, a: string) => `Mega online flash sale: 99% discount on hypercars and flagship phones expires in 90 seconds, ${p} and ${a} must reach the wifi finish line!`,
    hookVi: 'Không phải đua vì huy chương mà là đua để kịp thanh toán giỏ hàng trước khi hết mã giảm giá!',
    hookEn: 'Racing not for championship glory, but to check out the promo cart before checkout closes!'
  },
  {
    cat: 'family',
    titleVi: 'Lệnh Giới Nghiêm Của Vợ Lúc 10 Giờ',
    titleEn: 'The Strict 10 PM Spousal Curfew',
    descVi: (p: string, a: string) => `Vợ của ${p} gọi điện đanh thép: "Đúng 10 phút nữa không có mặt ở nhà thì toàn bộ bộ sưu tập giày hiệu và xế cưng sẽ được tặng đồng nát!"`,
    descEn: (p: string, a: string) => `${p}'s wife gave a bone-chilling countdown: "Be home in 10 minutes or your designer shoe and car collection goes to the thrift store!"`,
    hookVi: 'Sức mạnh từ lệnh triệu tập của nóc nhà đang biến những cỗ máy thành tên lửa hành trình!',
    hookEn: 'Nothing matches the absolute horsepower of a driver racing to beat his wife’s curfew!'
  },
  {
    cat: 'police',
    titleVi: 'Cảnh Sát Giao Thông Chuẩn Bị Cẩu Xe',
    titleEn: 'Tow Trucks Circling Illegal Parking',
    descVi: (p: string, a: string) => `Bà hàng xóm báo tin xe cứu hộ đang chuẩn bị cẩu toàn bộ dàn siêu xe của ${p} và ${a} vì tội đậu lấn chiếm lòng lề đường!`,
    descEn: (p: string, a: string) => `Neighbor alerted that traffic tow trucks are backing up to impound ${p} and ${a}'s illegally parked hypercar armada!`,
    hookVi: 'Chạy đua với xe cẩu của cảnh sát, các chiến thần phi bạt mạng cứu xế yêu!',
    hookEn: 'A frantic sprint against municipal tow trucks to save multimillion-dollar rides from the impound lot!'
  },
  {
    cat: 'police',
    titleVi: 'Nốt Gửi Xe Cuối Cùng Ở Trung Tâm',
    titleEn: 'The Final Underground Parking Slot',
    descVi: (p: string, a: string) => `Bảng điện tử báo hầm xe trung tâm thương mại chỉ còn đúng 1 vị trí đỗ duy nhất giữa trưa nắng 45 độ, ${p} và ${a} quyết tử tranh giành!`,
    descEn: (p: string, a: string) => `Garage sensor shows exactly one shaded underground parking space remaining in 45°C scorching heat, sparking an all-out sprint between ${p} and ${a}!`,
    hookVi: 'Tranh giành cái chuồng gửi xe duy nhất mà ép cua tạt đầu khét lẹt!',
    hookEn: 'Risking carbon fiber bodywork just to claim the last shaded parking spot in town!'
  },
  {
    cat: 'bet',
    titleVi: 'Kèo Cá Cược Nhuộm Tóc Hồng Cánh Sen',
    titleEn: 'The Neon Pink Hair & Tutu Bet',
    descVi: (p: string, a: string) => `${p} cá cược với ${a}: Kẻ thua cuộc phải nhuộm tóc hồng cánh sen và mặc váy ba-lê nhảy điệu lắc hông trong buổi họp báo quốc tế!`,
    descEn: (p: string, a: string) => `${p} challenged ${a}: The loser must dye their hair fluorescent pink and wear a ballerina tutu at the international press conference!`,
    hookVi: 'Vì danh dự đàn ông và để không phải mặc váy hồng, chân ga đã bị đạp lún sàn!',
    hookEn: 'Zero pride left to spare—nobody wants to wear that pink ballerina tutu on live television!'
  },
  {
    cat: 'gaming',
    titleVi: 'Tranh Chấp Chỉ Số Tốc Độ 99 Trong Game',
    titleEn: 'The 99 Pace Rating Video Game Dispute',
    descVi: (p: string, a: string) => `Hãng game vừa hạ chỉ số tốc độ của ${p} và tăng cho ${a}, hai huyền thoại quyết định đưa siêu xe vào trường đua để phân định ai mới là chiến thần thực sự!`,
    descEn: (p: string, a: string) => `Game devs downgraded ${p}'s pace rating while buffing ${a}, triggering an asphalt war to settle who is truly the speed king!`,
    hookVi: 'Không cần bàn phím hay tay cầm, chỉ có tốc độ 600 km/h mới chứng minh ai xứng đáng chỉ số 99!',
    hookEn: 'Settling esports arguments on burning asphalt at 600 km/h!'
  },
  {
    cat: 'music',
    titleVi: 'Cặp Vé VIP Concert Hàng Ghế Đầu',
    titleEn: 'The Front-Row VIP Concert Passes',
    descVi: (p: string, a: string) => `Chỉ còn 1 cặp vé VIP xem đại nhạc hội quốc tế được treo thưởng cho người đầu tiên cán đích, ${p} thề sẽ không để ${a} chạm tay vào!`,
    descEn: (p: string, a: string) => `Only one pair of front-row VIP stadium concert passes remains as the champion bounty, and ${p} refuses to let ${a} snatch them!`,
    hookVi: 'Ánh đèn sân khấu và chiếc vé VIP đang vẫy gọi, không một ai chịu nhả chân ga!',
    hookEn: 'Chasing the golden VIP pass with ruthless aggression down the main straightaway!'
  },
  {
    cat: 'food',
    titleVi: 'Bát Phở Bò Sốt Vang Bát Đàn Cuối Cùng',
    titleEn: 'The Last Gourmet Beef Stew Pho Bowl',
    descVi: (p: string, a: string) => `Quán phở gia truyền thông báo nồi sốt vang đặc biệt chỉ còn đúng 1 bát duy nhất cho vị khách đến trước giờ đóng cửa 5 phút!`,
    descEn: (p: string, a: string) => `Famed traditional noodle house announced only one final bowl of signature wine-stewed beef pho remains before closing doors!`,
    hookVi: 'Một bát phở bò sốt vang nóng hổi đang thôi thúc những động cơ gào thét long trời lở đất!',
    hookEn: 'Driven by the primal craving for the world’s finest beef stew noodle bowl!'
  },
  {
    cat: 'family',
    titleVi: 'Mẹ Gọi Về Ăn Cơm Chiều Khẩn Cấp',
    titleEn: "Mom's Urgent Dinner Call Ultimatum",
    descVi: (p: string, a: string) => `Mẹ gọi điện đanh thép: "5 phút nữa không có mặt ở mâm cơm thì mẹ bán sạch dàn siêu xe lấy tiền nuôi đàn gà!"`,
    descEn: (p: string, a: string) => `Mom called with ultimate authority: "Be home for dinner in five minutes or I sell your supercar collection to buy chickens!"`,
    hookVi: 'Lời mẹ dạy là mệnh lệnh tối cao, tên lửa đạn đạo cũng phải dạt sang một bên!',
    hookEn: 'Unleashing pure maternal discipline on the track at supersonic speeds!'
  },
  {
    cat: 'sabotage',
    titleVi: 'Đổ Nhầm Nước Tăng Lực Vào Bình Xăng',
    titleEn: 'Energy Drink Poured Into The Fuel Tank',
    descVi: (p: string, a: string) => `Thợ máy lơ đễnh đổ nhầm 10 lon nước tăng lực bò húc vào bình xăng, khiến xe của ${p} tăng vọt lên 700 mã lực ngoài tầm kiểm soát!`,
    descEn: (p: string, a: string) => `Mechanic mistakenly dumped 10 cans of taurine energy drink into the fuel tank, unleashing a 700hp runaway rocket for ${p}!`,
    hookVi: 'Động cơ uống nước tăng lực đang rú lên như quái thú sổng chuồng xé toạc không gian!',
    hookEn: 'The energy drink fueled engine is screaming like an untamed monster down the tarmac!'
  },
  {
    cat: 'bet',
    titleVi: 'Kèo Cạo Trọc Đầu Múa Quạt',
    titleEn: 'The Bald Head & Fan Dance Bet',
    descVi: (p: string, a: string) => `${p} và ${a} cá cược cực gắt: Ai cán đích sau phải cạo trọc đầu và livestream múa quạt 8 tiếng liên tục trước 1 triệu khán giả!`,
    descEn: (p: string, a: string) => `${p} and ${a} agreed on extreme terms: The loser shaves completely bald and does a viral 8-hour fan dance on livestream!`,
    hookVi: 'Để bảo vệ mái tóc triệu đô bồng bềnh, các tay đua sẵn sàng đạp gãy cả bàn đạp ga!',
    hookEn: 'Defending their multi-million dollar hairstyles with pedal-to-the-metal desperation!'
  },
  {
    cat: 'shopping',
    titleVi: 'Giành Giật Đôi Giày Bản Giới Hạn 1/1',
    titleEn: 'The 1-of-1 Limited Edition Sneaker Duel',
    descVi: (p: string, a: string) => `Cửa hàng đồ hiệu mở bán duy nhất 1 đôi giày kim cương phiên bản 1/1, ai đỗ xe trước cửa tiệm đầu tiên được quyền sở hữu!`,
    descEn: (p: string, a: string) => `Flagship boutique opened sale for a 1-of-1 diamond sneaker; whoever parks at the curb first gets exclusive purchasing rights!`,
    hookVi: 'Cuộc chiến giày hiệu biến đường đua thành chiến trường không khoan nhượng!',
    hookEn: 'Sneakerhead obsession taking over professional motorsport at 650 km/h!'
  },
  {
    cat: 'police',
    titleVi: 'Bác Bảo Vệ Khóa Cổng Xóm Lúc 10 Giờ Đêm',
    titleEn: 'Gated Villa Neighborhood Curfew at 10 PM',
    descVi: (p: string, a: string) => `Bác bảo vệ khu biệt thự thông báo đúng 10h đêm kéo cổng sắt khóa xích, ai về muộn phải dựng lều ngủ ngoài vỉa hè muỗi đốt!`,
    descEn: (p: string, a: string) => `Security chief warned that the gated villa community chains the gates at 10 PM sharp, leaving latecomers out on the sidewalk!`,
    hookVi: 'Nỗi sợ bị muỗi đốt ngoài cổng xóm khiến kim đồng hồ tốc độ vỡ toang!',
    hookEn: 'Terror of sleeping on the curb is propelling these machines to lightspeed!'
  },
  {
    cat: 'supersonic',
    titleVi: 'Đào Tẩu Khỏi Đám Đông Fan Cuồng',
    titleEn: 'Escaping The Mob of 50,000 Fans',
    descVi: (p: string, a: string) => `Đám đông 50,000 fan hâm mộ cầm bút xin chữ ký đang tràn vào đường pitch, ${p} và ${a} phải dùng tốc độ ánh sáng để thoát thân!`,
    descEn: (p: string, a: string) => `A mob of 50,000 autograph-hunting fans breached the paddock, forcing ${p} and ${a} into an immediate supersonic escape!`,
    hookVi: 'Vừa đua xe vừa né rừng ống kính máy ảnh, kỹ năng drift ở đẳng cấp thần thánh!',
    hookEn: 'Evasive high-speed maneuvers escaping millions of paparazzi flashbulbs!'
  },
  {
    cat: 'gaming',
    titleVi: 'Kèo Trả Thù Bàn Thua Phút 90+5',
    titleEn: 'The 95th-Minute Penalty Revenge',
    descVi: (p: string, a: string) => `${p} cay cú vì quả phạt đền oan nghiệt ở phút bù giờ hôm qua, quyết tâm dùng siêu xe hất tung đối thủ ${a} để rửa hận trên đường đua!`,
    descEn: (p: string, a: string) => `${p} is furious over yesterday's controversial 95th-minute penalty, bringing pure vengeance against ${a} onto the asphalt!`,
    hookVi: 'Mối thù sân cỏ được chuyển giao sang đường đua, không có chỗ cho sự hòa nhã!',
    hookEn: 'Transferring raw football pitch grudges onto 600 horsepower track monsters!'
  },
  {
    cat: 'food',
    titleVi: 'Cốc Trà Sữa Trân Châu Full Topping Size L',
    titleEn: 'The Stolen Boba Milk Tea With Triple Toppings',
    descVi: (p: string, a: string) => `${p} phát hiện ${a} đã hút sạch cốc trà sữa trân châu đường đen size L để dành trong tủ lạnh của mình, cơn thịnh nộ bùng nổ!`,
    descEn: (p: string, a: string) => `${p} caught ${a} sipping the last drop of his prized brown sugar boba milk tea from the clubhouse fridge, igniting pure fury!`,
    hookVi: 'Một cốc trà sữa trân châu đã châm ngòi cho trận thư hùng đắt giá nhất lịch sử!',
    hookEn: 'A feud ignited by stolen bubble tea reaches terminal velocity down the circuit!'
  },
  {
    cat: 'sabotage',
    titleVi: 'Lắp Nhầm Động Cơ Máy Bay Boing 747',
    titleEn: 'Fitted With A Jet Airliner Turbine',
    descVi: (p: string, a: string) => `Đội kỹ thuật lắp thử nghiệm động cơ tuốc-bin phản lực hàng không, biến xe của ${p} thành phi thuyền bay là là mặt đất!`,
    descEn: (p: string, a: string) => `Pit crew experimented with an aviation jet turbine, turning ${p}'s ride into a ground-hugging space shuttle!`,
    hookVi: 'Lửa phụt ra từ ống xả dài 5 mét, mặt đường bốc khói nghi ngút như hỏa ngục!',
    hookEn: 'Twin afterburners spitting five-meter flames, turning the tarmac into scorched earth!'
  },
  {
    cat: 'bet',
    titleVi: 'Kèo Rửa Xe Và Bơm Lốp Cho Cả Đội Suốt 1 Năm',
    titleEn: 'One Year of Car Wash & Tire Pumping Duty',
    descVi: (p: string, a: string) => `${p} thách thức: Kẻ thua trận này phải làm nhân viên rửa xe, lau kính và bơm lốp không lương cho cả đội suốt 365 ngày!`,
    descEn: (p: string, a: string) => `${p} challenged: The loser serves as unpaid car washer, window wiper and tire pumper for the squad for 365 consecutive days!`,
    hookVi: 'Tránh kiếp làm culi rửa xe cả năm, các siêu sao gồng cơ bắp ghì chặt vô-lăng!',
    hookEn: 'Fighting desperately to avoid a year of indentured pit-lane cleaning service!'
  },
  {
    cat: 'family',
    titleVi: 'Bỏ Quên Chìa Khóa Nhà Trên Xe Của Vợ',
    titleEn: 'House Keys Locked Inside The Wife’s Car',
    descVi: (p: string, a: string) => `${p} phát hiện chìa khóa két sắt và nhà đang nằm trong xe của ${a}, phải vượt lên ép dừng xe trước khi đối thủ đi mất hút!`,
    descEn: (p: string, a: string) => `${p} realized his house and safe keys were left inside ${a}'s car, demanding a desperate high-speed interception!`,
    hookVi: 'Truy đuổi chìa khóa nhà với vận tốc 620 km/h, pha rượt đuổi nghẹt thở từng mili-giây!',
    hookEn: 'Intercepting the car holding his front door keys at 620 km/h!'
  },
  {
    cat: 'shopping',
    titleVi: 'Voucher Nghỉ Dưỡng 6 Sao Maldives Miễn Phí',
    titleEn: 'The Free 6-Star Maldives Island Voucher',
    descVi: (p: string, a: string) => `Nhà tài trợ trao tặng chuyến nghỉ dưỡng biệt lập tại đảo thiên đường Maldives cho tay đua dẫn đầu vòng đua cuối cùng!`,
    descEn: (p: string, a: string) => `Title sponsor offered an ultra-exclusive private island Maldives getaway for whoever leads the final lap!`,
    hookVi: 'Thiên đường nghỉ dưỡng đang vẫy gọi, không một ai muốn ở lại sau làn khói lốp!',
    hookEn: 'A luxury island retreat waiting at the checkered flag, driving speeds into orbit!'
  },
  {
    cat: 'police',
    titleVi: 'Chạy Trốn Bác Trọng Tài VAR Cầm Thẻ Đỏ',
    titleEn: 'Evading The VAR Referee Brandishing Red Cards',
    descVi: (p: string, a: string) => `Trọng tài VAR đang lái xe an toàn đuổi theo sau với xấp thẻ đỏ trên tay, ${p} và ${a} phải bứt tốc tẩu thoát để không bị treo giò!`,
    descEn: (p: string, a: string) => `The head VAR referee is tailing in the safety car holding a stack of red cards, forcing ${p} and ${a} into a full throttle escape!`,
    hookVi: 'Né thẻ đỏ của trọng tài VAR bằng vận tốc âm thanh, cảnh tượng chưa từng có!',
    hookEn: 'Outrunning the VAR penalty car at Mach speed in an unprecedented showdown!'
  },
  {
    cat: 'supersonic',
    titleVi: 'Trận Chiến Vương Quyền Tốc Độ Vũ Trụ',
    titleEn: 'The Galactic Speed Crown Championship',
    descVi: (p: string, a: string) => `Hai biểu tượng vĩ đại nhất lịch sử bóng đá quyết định dùng tốc độ xe hơi để chứng minh ai mới là GOAT thực sự của nhân loại!`,
    descEn: (p: string, a: string) => `The two greatest football icons in history enter the arena on high-octane hypercars to settle the ultimate GOAT debate once and for all!`,
    hookVi: 'Đại chiến giữa các vị thần tốc độ, đất trời rung chuyển theo từng cú vẩy vô-lăng!',
    hookEn: 'A clash of cosmic deities shaking the ground with every millimeter of tire deflection!'
  }
];

// 20 Biến cố cao trào bất ngờ
const TRACK_TWISTS_VI = [
  'Đột nhiên một chú mèo hoang chạy ngang đường khiến tay đua phải drift 360 độ né tránh!',
  'Bình xịt nitro bất ngờ xả van cực đại khiến chiếc xe bốc đầu bay là là trên không trung!',
  'Tiếng loa phóng thanh của HLV vang dội chửi bới khiến cả hai tay đua giật mình đè lún chân ga!',
  'Mặt đường trơn trượt như đổ xà phòng, những cỗ máy 700 mã lực bắt đầu lướt sóng nghệ thuật!',
  'Cánh gió sau bung khóa khí động học, tạo luồng gió xoáy hút đối thủ vào thế bám đuôi nghẹt thở!',
  'Một cơn gió bão nhiệt đới ùa qua thổi bay khói lốp, để lộ khoảng cách chỉ 0.01 giây giữa hai đầu xe!',
  'Tiếng còi cảnh sát hú vang phía sau khiến các tay đua tưởng bị bắt thật, đồng loạt vặn ga tẩu thoát!',
  'Lốp xe bắt đầu bốc khói cam rực rỡ, ma sát nóng chảy cả nhựa đường bên dưới!',
  'Chiếc xe phía sau kích hoạt chế độ siêu tăng áp, vút lên như tên lửa hành trình xuyên thủng bóng đêm!',
  'Gương chiếu hậu vỡ toang vì áp suất gió, tay đua chỉ còn biết nhìn thẳng và niệm chú sống sót!'
];

const TRACK_TWISTS_EN = [
  'A stray mascot ran across the tarmac, forcing an incredible 360-degree high-speed drift!',
  'The twin nitro purge valves jammed wide open, launching the machine into ground-effect flight!',
  'The manager’s furious voice erupted through the team radio, compelling both drivers to bury the accelerator!',
  'Sudden slippery rain slicked the asphalt, turning a race into an acrobatic high-speed drift ballet!',
  'The active rear wing deployed into hyper-drag mode, creating a turbulent slipstream vortex!',
  'A sudden crosswind blew away tire smoke to reveal a microscopic 0.01-second gap between bumpers!',
  'Emergency sirens echoed in the distance, prompting drivers to treat the track as an outlaw escape route!',
  'Tires began smoking in neon orange plumes, melting asphalt under staggering friction forces!',
  'The trailing supercar unleashed a secret overboost map, rocketing forward like a laser-guided missile!',
  'Side mirrors detached under atmospheric velocity, leaving the pilot to rely entirely on pure survival instinct!'
];

// 20 Mức phạt / Hậu quả tấu hài khi về bét
const CONSEQUENCES_VI = [
  'phải mặc váy dạ hội xẻ tà phục vụ trà đá cho cả xóm suốt mùa hè',
  'bị tịch thu toàn bộ điện thoại và phải xài máy bàn cổ điển trong 6 tháng',
  'phải đăng video múa quạt xin lỗi đối thủ lên mạng xã hội với hashtag #ToiLaKeThuaCuoc',
  'phải khao cả đội 1 chuyến du thuyền sang chảnh và cắm cọc nướng thịt suốt 3 ngày',
  'bị cạo nửa bên đầu và nhuộm màu xanh chuối đi dự lễ trao giải quả bóng vàng',
  'phải đi xe đạp cút kít ba bánh đi tập bóng suốt cả tháng',
  'phải cõng HLV trưởng chạy 15 vòng quanh sân vận động dưới trời trưa nắng',
  'phải rửa chén bát và chà nồi niêu xoong chảo cho bếp ăn của câu lạc bộ',
  'phải hát karaoke liên tục 12 tiếng không ngừng nghỉ trên sóng truyền hình trực tiếp',
  'bị khóa tài khoản ngân hàng và chỉ được tiêu 50 nghìn đồng mỗi ngày để mua bánh mì'
];

const CONSEQUENCES_EN = [
  'must wear a glittery evening gown while serving iced tea to the entire neighborhood all summer',
  'will have all smartphones confiscated and be restricted to a rotary landline phone for six months',
  'must upload an apology dance video to social media tagged #IAmTheDefeatedOne',
  'has to charter a private yacht feast for the team and serve barbecue for three straight days',
  'will have half their head shaved and dyed lime green for the next Ballon d’Or gala',
  'must commute to training on a toddler’s tricycle for an entire month',
  'must carry the head coach on their back for 15 laps around the stadium at noon',
  'is relegated to washing dishes and scrubbing giant pots at the training center kitchen',
  'must sing karaoke for 12 uninterrupted hours on national television broadcast',
  'will have bank accounts frozen and be put on a strict $2-a-day instant noodle allowance'
];

/**
 * Thuật toán băm deterministically sinh số ngẫu nhiên theo ID kịch bản (1 .. 3000)
 */
function pseudoHash(id: number, salt: number): number {
  let h = (id * 1664525 + salt * 1013904223 + 22695477) >>> 0;
  h = (h ^ (h >>> 16)) * 2246822507;
  h = (h ^ (h >>> 13)) * 3266489909;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/**
 * Sinh 1 cốt truyện độc bản chuẩn từ ID 1 tới 3000
 */
export function generateStorylineById(storyId: number): HilariousRaceStoryline {
  const safeId = Math.max(1, Math.min(TOTAL_STORYLINES, Math.round(storyId)));
  
  const pIdx = Math.floor(pseudoHash(safeId, 11) * STAR_DRIVERS.length);
  let aIdx = Math.floor(pseudoHash(safeId, 23) * STAR_DRIVERS.length);
  if (aIdx === pIdx) aIdx = (pIdx + 1) % STAR_DRIVERS.length;

  const protagonist = STAR_DRIVERS[pIdx];
  const antagonist = STAR_DRIVERS[aIdx];

  const incIdx = Math.floor(pseudoHash(safeId, 37) * INCITING_INCIDENTS.length);
  const baseInc = INCITING_INCIDENTS[incIdx];

  const twistIdx = Math.floor(pseudoHash(safeId, 49) * TRACK_TWISTS_VI.length);
  const twistVi = TRACK_TWISTS_VI[twistIdx];
  const twistEn = TRACK_TWISTS_EN[twistIdx];

  const consIdx = Math.floor(pseudoHash(safeId, 61) * CONSEQUENCES_VI.length);
  const consVi = CONSEQUENCES_VI[consIdx];
  const consEn = CONSEQUENCES_EN[consIdx];

  const catObj = STORYLINE_CATEGORIES.find(c => c.id === baseInc.cat) || STORYLINE_CATEGORIES[1];

  const titleVi = `#${safeId.toString().padStart(4, '0')}: ${baseInc.titleVi} - ${protagonist} vs ${antagonist}`;
  const titleEn = `#${safeId.toString().padStart(4, '0')}: ${baseInc.titleEn} - ${protagonist} vs ${antagonist}`;

  const premiseVi = `${baseInc.descVi(protagonist, antagonist)} Bất ngờ xảy ra: ${twistVi} Kẻ thất bại trong cuộc đua này ${consVi}!`;
  const premiseEn = `${baseInc.descEn(protagonist, antagonist)} Shock twist: ${twistEn} The loser in this showdown ${consEn}!`;

  const hookVi = `[KỊCH BẢN #${safeId.toString().padStart(4, '0')}] ${baseInc.hookVi} ${protagonist} và ${antagonist} đang bung hết 200% sức mạnh!`;
  const hookEn = `[STORY #${safeId.toString().padStart(4, '0')}] ${baseInc.hookEn} ${protagonist} and ${antagonist} are pushing 200% mechanical limits!`;

  return {
    id: `story_${safeId.toString().padStart(4, '0')}`,
    index: safeId,
    categoryVi: catObj.nameVi,
    categoryEn: catObj.nameEn,
    titleVi,
    titleEn,
    premiseVi,
    premiseEn,
    commentaryHookVi: hookVi,
    commentaryHookEn: hookEn,
    protagonist,
    antagonist
  };
}

// Bộ nhớ Cache lưu sẵn các kịch bản đã sinh để tối ưu hiệu năng
const storylineCache = new Map<number, HilariousRaceStoryline>();

/**
 * Lấy cốt truyện theo ID (1 .. 3000)
 */
export function getStorylineByIndex(index: number): HilariousRaceStoryline {
  const norm = ((Math.abs(index) - 1) % TOTAL_STORYLINES) + 1;
  const cached = storylineCache.get(norm);
  if (cached) return cached;

  const generated = generateStorylineById(norm);
  storylineCache.set(norm, generated);
  return generated;
}

/**
 * Lấy cốt truyện ngẫu nhiên theo race seed hoặc instance ID (cho commentaryGenerator)
 */
export function getRaceStoryline(seed: number, lang: 'vi' | 'en' = 'vi'): {
  id: string;
  index: number;
  title: string;
  premise: string;
  hook: string;
  category: string;
} {
  // Lấy hash seed ra chỉ số từ 1 đến 3000
  const mappedIndex = (Math.abs(Math.floor(seed * 73 + 19)) % TOTAL_STORYLINES) + 1;
  const s = getStorylineByIndex(mappedIndex);

  return {
    id: s.id,
    index: s.index,
    title: lang === 'en' ? s.titleEn : s.titleVi,
    premise: lang === 'en' ? s.premiseEn : s.premiseVi,
    hook: lang === 'en' ? s.commentaryHookEn : s.commentaryHookVi,
    category: lang === 'en' ? s.categoryEn : s.categoryVi
  };
}

/**
 * Tìm kiếm & Lọc trong kho 3,000 cốt truyện
 */
export function searchStorylines(
  query: string = '',
  categoryName: string = 'all',
  page: number = 1,
  pageSize: number = 20,
  lang: 'vi' | 'en' = 'vi'
): { items: HilariousRaceStoryline[]; totalCount: number; totalPages: number } {
  const q = query.trim().toLowerCase();
  const matched: HilariousRaceStoryline[] = [];

  // Quét nhanh qua 3,000 kịch bản
  for (let i = 1; i <= TOTAL_STORYLINES; i++) {
    const item = getStorylineByIndex(i);
    
    // Lọc theo Category
    if (categoryName !== 'all' && categoryName !== '') {
      if (!item.categoryVi.toLowerCase().includes(categoryName.toLowerCase()) &&
          !item.categoryEn.toLowerCase().includes(categoryName.toLowerCase())) {
        continue;
      }
    }

    // Lọc theo từ khóa tìm kiếm
    if (q) {
      const matchSearch =
        item.titleVi.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.premiseVi.toLowerCase().includes(q) ||
        item.premiseEn.toLowerCase().includes(q) ||
        item.protagonist.toLowerCase().includes(q) ||
        item.antagonist.toLowerCase().includes(q) ||
        item.index.toString() === q ||
        `#${item.index}` === q;

      if (!matchSearch) continue;
    }

    matched.push(item);
  }

  const totalCount = matched.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const start = (page - 1) * pageSize;
  const items = matched.slice(start, start + pageSize);

  return { items, totalCount, totalPages };
}

/**
 * Lấy 1 kịch bản ngẫu nhiên bất kỳ
 */
export function getRandomStoryline(): HilariousRaceStoryline {
  const randId = Math.floor(Math.random() * TOTAL_STORYLINES) + 1;
  return getStorylineByIndex(randId);
}
