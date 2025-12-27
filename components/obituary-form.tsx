"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { obituaryFormSchema, ObituaryFormValues } from "@/lib/validations";
import { GeneratedObituary } from "@/types";

interface ObituaryFormProps {
  onGenerate: (obituary: GeneratedObituary) => void;
}

export function ObituaryForm({ onGenerate }: ObituaryFormProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ObituaryFormValues>({
    resolver: zodResolver(obituaryFormSchema),
    defaultValues: {
      tone: "formal",
    },
  });

  const tone = watch("tone");

  const onSubmit = async (data: ObituaryFormValues) => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-obituary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate obituary");
      }

      const result = await response.json();
      onGenerate({
        text: result.text,
        generatedAt: new Date(result.generatedAt),
      });
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the obituary");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
          <TabsTrigger value="life">Life & Career</TabsTrigger>
          <TabsTrigger value="service">Service</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Basic details about the deceased</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input
                    id="middleName"
                    {...register("middleName")}
                    placeholder="Michael"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maidenName">Maiden Name</Label>
                  <Input
                    id="maidenName"
                    {...register("maidenName")}
                    placeholder="Johnson"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nickname">Nickname</Label>
                  <Input
                    id="nickname"
                    {...register("nickname")}
                    placeholder="Johnny"
                  />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">
                    Birth Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    {...register("birthDate")}
                  />
                  {errors.birthDate && (
                    <p className="text-sm text-red-500">{errors.birthDate.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthPlace">Birth Place</Label>
                  <Input
                    id="birthPlace"
                    {...register("birthPlace")}
                    placeholder="New York, NY"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deathDate">
                    Death Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="deathDate"
                    type="date"
                    {...register("deathDate")}
                  />
                  {errors.deathDate && (
                    <p className="text-sm text-red-500">{errors.deathDate.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deathPlace">Death Place</Label>
                  <Input
                    id="deathPlace"
                    {...register("deathPlace")}
                    placeholder="Los Angeles, CA"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Family Information Tab */}
        <TabsContent value="family" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family Information</CardTitle>
              <CardDescription>Details about family members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="parents">Parents</Label>
                <Input
                  id="parents"
                  {...register("parents")}
                  placeholder="Mary and Robert Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouse">Spouse</Label>
                <Input
                  id="spouse"
                  {...register("spouse")}
                  placeholder="Jane Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="children">Children</Label>
                <Textarea
                  id="children"
                  {...register("children")}
                  placeholder="Sarah Smith, Michael Smith, and Emily Johnson"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siblings">Siblings</Label>
                <Textarea
                  id="siblings"
                  {...register("siblings")}
                  placeholder="Brother James Smith and sister Lisa Brown"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grandchildren">Grandchildren</Label>
                <Textarea
                  id="grandchildren"
                  {...register("grandchildren")}
                  placeholder="Five grandchildren"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Life & Career Tab */}
        <TabsContent value="life" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Life & Career</CardTitle>
              <CardDescription>Education, career, and interests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  id="education"
                  {...register("education")}
                  placeholder="Bachelor's degree from University of California"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="career">Career</Label>
                <Textarea
                  id="career"
                  {...register("career")}
                  placeholder="Worked as a teacher for 30 years at Lincoln High School"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="military">Military Service</Label>
                <Textarea
                  id="military"
                  {...register("military")}
                  placeholder="Served in the U.S. Army from 1965-1969"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hobbies">Hobbies & Interests</Label>
                <Textarea
                  id="hobbies"
                  {...register("hobbies")}
                  placeholder="Enjoyed gardening, reading, and spending time with family"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="achievements">Achievements</Label>
                <Textarea
                  id="achievements"
                  {...register("achievements")}
                  placeholder="Received Teacher of the Year award in 1995"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organizations">Organizations & Memberships</Label>
                <Textarea
                  id="organizations"
                  {...register("organizations")}
                  placeholder="Member of the Rotary Club and local church choir"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Service Information Tab */}
        <TabsContent value="service" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Information</CardTitle>
              <CardDescription>Memorial or funeral service details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serviceDate">Service Date</Label>
                <Input
                  id="serviceDate"
                  {...register("serviceDate")}
                  placeholder="Saturday, December 15, 2024 at 2:00 PM"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceLocation">Service Location</Label>
                <Input
                  id="serviceLocation"
                  {...register("serviceLocation")}
                  placeholder="Grace Memorial Chapel, 123 Main St"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceDetails">Additional Service Details</Label>
                <Textarea
                  id="serviceDetails"
                  {...register("serviceDetails")}
                  placeholder="Reception to follow at the family home. In lieu of flowers, donations may be made to..."
                  rows={4}
                />
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label htmlFor="specialMessage">Special Message or Notes</Label>
                <Textarea
                  id="specialMessage"
                  {...register("specialMessage")}
                  placeholder="Any special memories, quotes, or messages you'd like to include"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Obituary Tone</Label>
                <Select
                  value={tone}
                  onValueChange={(value) =>
                    setValue("tone", value as "formal" | "casual" | "celebratory" | "spiritual")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formal">Formal & Traditional</SelectItem>
                    <SelectItem value="casual">Casual & Warm</SelectItem>
                    <SelectItem value="celebratory">Celebratory & Uplifting</SelectItem>
                    <SelectItem value="spiritual">Spiritual & Reflective</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-sm text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating Obituary...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Obituary with AI
          </>
        )}
      </Button>
    </form>
  );
}
