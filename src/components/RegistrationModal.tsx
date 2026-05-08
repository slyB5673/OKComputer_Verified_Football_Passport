import { useState } from 'react';
import { X, User, Mail, Lock, Phone, MapPin, Camera, Upload, Check, Ruler, Footprints } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'player' | 'agent';
}

export default function RegistrationModal({ isOpen, onClose, type }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    position: '',
    club: '',
    height: '',
    bestFoot: '',
    licenseNumber: '',
    agency: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 3000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E]">
              {type === 'player' ? 'Create Player Profile' : 'Register as Agent'}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {type === 'player' 
                ? 'Showcase your talent to scouts worldwide' 
                : 'Join our verified agent network'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#1DAF68]/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#1DAF68]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Welcome to VerifyBall Africa. We'll verify your information and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s
                          ? 'bg-[#1DAF68] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-12 h-1 rounded transition-colors ${
                          step > s ? 'bg-[#1DAF68]' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 123 456 7890"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="country"
                          name="country"
                          placeholder="Nigeria"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="city"
                          name="city"
                          placeholder="Lagos"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Info */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  {type === 'player' ? (
                    <>
                      <div>
                        <Label htmlFor="position">Playing Position</Label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1DAF68] focus:border-transparent"
                          required
                        >
                          <option value="">Select Position</option>
                          <option value="goalkeeper">Goalkeeper</option>
                          <option value="defender">Defender</option>
                          <option value="midfielder">Midfielder</option>
                          <option value="forward">Forward</option>
                          <option value="winger">Winger</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="club">Current Club (Optional)</Label>
                        <Input
                          id="club"
                          name="club"
                          placeholder="Your current team"
                          value={formData.club}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="height">Height (cm)</Label>
                          <div className="relative">
                            <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              id="height"
                              name="height"
                              type="number"
                              placeholder="175"
                              value={formData.height}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="bestFoot">Best Foot</Label>
                          <div className="relative">
                            <Footprints className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              id="bestFoot"
                              name="bestFoot"
                              value={formData.bestFoot}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1DAF68] focus:border-transparent"
                              required
                            >
                              <option value="">Select Foot</option>
                              <option value="right">Right</option>
                              <option value="left">Left</option>
                              <option value="both">Both</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#1DAF68] transition-colors cursor-pointer">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Upload Profile Photo</p>
                        <p className="text-gray-400 text-sm">Click or drag and drop</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Label htmlFor="agency">Agency Name</Label>
                        <Input
                          id="agency"
                          name="agency"
                          placeholder="Your agency name"
                          value={formData.agency}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="licenseNumber">FIFA License Number</Label>
                        <Input
                          id="licenseNumber"
                          name="licenseNumber"
                          placeholder="FIFA-XXXX-XXXX"
                          value={formData.licenseNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#1DAF68] transition-colors cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Upload License Document</p>
                        <p className="text-gray-400 text-sm">PDF or Image format</p>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 3: Security */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-[#E8F7EF] rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#1DAF68] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#1A1A2E]">Safety First</p>
                        <p className="text-sm text-gray-600">
                          Your information is secure with us. We verify all profiles to prevent fraud and ensure a safe environment for everyone.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1DAF68] focus:ring-[#1DAF68]"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-[#1DAF68] hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-[#1DAF68] hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="px-6"
                  >
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#1DAF68] hover:bg-[#1D8B54] text-white px-8"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-[#1DAF68] hover:bg-[#1D8B54] text-white px-8"
                  >
                    Complete Registration
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
